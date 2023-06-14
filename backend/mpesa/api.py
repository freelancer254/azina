import requests
from requests.auth import HTTPBasicAuth
from datetime import datetime
import base64


#personal mpesa API wrapper
#set the env to production, change baseURL if still in sandbox
class Mpesa:
	def __init__(self):
		self.baseURL = 'https://api.safaricom.co.ke'
		self.headers = {}

	#takes the consumer key and secret to generate access token
	#the token expires after 1 hour -- can keep track or generate new one per post request
	def getAccessToken(self, consumer_key, consumer_secret):
		URL = self.baseURL + '/oauth/v1/generate?grant_type=client_credentials'
		auth = HTTPBasicAuth(consumer_key, consumer_secret)
		response = requests.get(url=URL, auth=auth).json()
		self.headers = {'Content-Type':'application/json','Authorization': 'Bearer {}'.format(response['access_token'])}
		return response['access_token']

	#initiate a transaction on behalf of the client - with stkPush
	def stkPush(self, payload):
		requiredKeys = ["AccessToken","BusinessShortCode","Password",
						 "Amount", "PartyA", "PartyB", "PhoneNumber",
						 "CallBackURL", "AccountReference", "TransactionDesc"]
		passedKeys = payload

		cleanedPayload = self.checkKeys(requiredKeys, passedKeys)

		#add the TransactionType Key
		cleanedPayload['TransactionType'] = "CustomerPayBillOnline"

		#add the timestamp
		cleanedPayload['Timestamp'] = self.getTimestamp()

		#delete the access token from the cleanedPayload
		del cleanedPayload['AccessToken']

		URL = self.baseURL + "/mpesa/stkpush/v1/processrequest"
		#send the request
		response = requests.post(url=URL,json=cleanedPayload,headers=self.headers).json()

		'''
		Expected Response - Does not mean that transaction is completed
		1. Success
		ResultCode : 0 int
		CheckoutRequestID to track the txn
		2. Error
		errorCode : string
		'''
		return response

	#register validationURL and confirmationURL
	'''validationURL not really mandatory - must authorise via safaricom support'''
	'''confirmation to receive notifications of completed transactions'''
	def registerURL(self, payload):
		requiredKeys = ['AccessToken','ShortCode','ResponseType',
						'ConfirmationURL','ValidationURL']
		passedKeys = payload
		cleanedPayload = self.checkKeys(requiredKeys, passedKeys)

		#delete the access token from the cleanedPayload
		del cleanedPayload['AccessToken']

		URL = self.baseURL + "/mpesa/c2b/v1/registerurl"

		response = requests.post(url=URL,json=cleanedPayload,headers=self.headers).json()

		'''
		   Expected Responses - Does not mean that transaction is completed
		   1. Success
		   ResponseDescription: Success string - not reliable to check success - use errorCode instead
		   2. Error
		   errorCode : string
		'''
		return response

	#simulate a customer making a transaction -- for testing the confirmation and validations urls
	def simulateTransaction(self, payload):
		requiredKeys = ['AccessToken','ShortCode','Amount','Msisdn','BillRefNumber']
		passedKeys = payload
		cleanedPayload = self.checkKeys(requiredKeys, passedKeys)

		#add CommandID
		cleanedPayload['CommandID'] = "CustomerPayBillOnline"

		#delete the access token from the cleanedPayload
		del cleanedPayload['AccessToken']

		URL = self.baseURL + "/mpesa/c2b/v1/simulate"

		response = requests.post(url=URL,json=cleanedPayload,headers=self.headers).json()

		'''
		Expected response
			1. success - use the OriginatorConversationID to track txn
			{
				"ConversationID": "AG_20180324_000066530b914eee3f85",
				"OriginatorCoversationID": "25344-885903-1",
				"ResponseDescription": "Accept the service request successfully."
			}
			2. Error
				errorCode string
		'''
		return response

	#reverse a transaction received
	def reverseTransaction(self, payload):
		requiredKeys = ["AccessToken","Initiator", "SecurityCredential",
						 "TransactionID", "Amount",
						 "ReceiverParty", "ResultURL",
						 "QueueTimeOutURL", "Remarks", "Occasion"]

		passedKeys = payload
		cleanedPayload = self.checkKeys(requiredKeys, passedKeys)

		#add CommandID
		cleanedPayload['CommandID'] = "TransactionReversal"

		#delete the access token from the cleanedPayload
		del cleanedPayload['AccessToken']

		URL = self.baseURL + "/mpesa/reversal/v1/request"

		response = requests.post(url=URL,json=cleanedPayload,headers=self.headers).json()

		'''
		Expected response
			1. success - ResultCode to determine if successful
				{
					"Result":
					{
						"ResultType":0,
						"ResultCode":0,
						...... they are others too
			2. error
				errorCode string
		'''
		return response

	#get details on a transaction - useful to make sure transaction is complete
	def queryTransaction(self, payload):
		requiredKeys = ["AccessToken","Initiator", "SecurityCredential",
						 "TransactionID", "PartyA",
						 "ResultURL", "QueueTimeOutURL",
						 "Remarks", "Occasion"]
		passedKeys = payload

		cleanedPayload = self.checkKeys(requiredKeys, passedKeys)

		#add CommandID
		cleanedPayload['CommandID'] = "TransactionStatusQuery"

		#add IdentifierType 1 for MSISDN 4 for org shortcode
		cleanedPayload['IdentifierType'] = "4"

		del cleanedPayload['AccessToken']

		URL = self.baseURL + "/mpesa/transactionstatus/v1/query"

		response = requests.post(url=URL,json=cleanedPayload,headers=self.headers).json()

		'''
		Expected response
			1. success
				{
				"ConversationID": "AG_20180324_000066530b914eee3f85",
				"OriginatorCoversationID": "25344-885903-1", -- use this as a unique tracker
				"ResponseDescription": "Accept the service request successfully."
			}
			2. Error
				errorCode string
		'''
		return response

	#get the balance of the paybill account

	def getBalance(self, payload):
		requiredKeys = ["AccessToken","Initiator", "SecurityCredential", "PartyA",
						 "Remarks", "QueueTimeOutURL", "ResultURL"]
		passedKeys = payload

		cleanedPayload = self.checkKeys(requiredKeys, passedKeys)

		#add CommandID
		cleanedPayload['CommandID'] = "AccountBalance"

		#add IdentifierType
		cleanedPayload['IdentifierType']  = "4"

		del cleanedPayload['AccessToken']

		URL = self.baseURL + "/mpesa/accountbalance/v1/query"

		response = requests.post(url=URL,json=cleanedPayload,headers=self.headers).json()

		'''
		Expected response
			1. success
				{
				"ConversationID": "AG_20180324_000066530b914eee3f85",
				"OriginatorCoversationID": "25344-885903-1",
				"ResponseDescription": "Accept the service request successfully."
			}
			2. Error
				errorCode string
		'''
		return response

	#send funds from paybill to customer - withdrawal functionality
	def B2CSend(self, payload):
		requiredKeys = ["AccessToken","InitiatorName", "SecurityCredential",
						 "Amount", "PartyA","PartyB", "Remarks", "QueueTimeOutURL",
						 "ResultURL", "Occassion"]
		passedKeys = payload

		cleanedPayload = self.checkKeys(requiredKeys, passedKeys)

		#add CommandID
		cleanedPayload['CommandID'] = "BusinessPayment"

		#delete AccessToken from payload
		del cleanedPayload['AccessToken']

		URL = self.baseURL + "/mpesa/b2c/v1/paymentrequest"

		response = requests.post(url=URL,json=cleanedPayload,headers=self.headers).json()

		'''
		Expected response
			1. success
				{
				"ConversationID": "AG_20180324_000066530b914eee3f85",
				"OriginatorConversationID": "25344-885903-1",
				"ResponseDescription": "Accept the service request successfully."
			}
			2. Error
				errorCode string
		'''
		return response

	#send funds from Paybill to Paybill -- currently not available
	#use the web portal
	def B2BSend(self, payload):
		pass

	#check if the required keys are passed to the functions
	def checkKeys(self, requiredKeys, passedKeys):
		cleanedcleanedPayload = {}

		for key in requiredKeys:
			try:
				cleanedcleanedPayload[key] = passedKeys[key]
			except:
				raise KeyError("Missing key {}".format(key))
		return cleanedcleanedPayload

	#returns the timestamp in YYYYMMDDHHMMSS
	def getTimestamp(self):

		return datetime.strftime(datetime.now(),"%Y%m%d%H%M%S")

	#encode password
	def encodePassword(self, shortcode, passkey):
		timestamp = self.getTimestamp()
		password = base64.b64encode((shortcode+passkey+timestamp).encode('utf-8'))
		return password.decode('utf-8')






