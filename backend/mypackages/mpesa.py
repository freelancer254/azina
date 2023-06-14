from decouple import config
from mpesa.api import Mpesa
import json

async def disburse_loan(amount:int, account_number:str):
  #send API request to Mpesa with B2C credentials*

  mpesa_client = Mpesa()
  payload = {
    "AccessToken": mpesa_client.getAccessToken(config('consumer_key2'), config('consumer_secret2')),
    "InitiatorName":config('Initiator2'),
    "SecurityCredential":config('SecurityCredential2'),
    "Amount":amount,
    "PartyA":config('shortcode2'),
    "PartyB":account_number,
    "Remarks":"Mpesa Payment",
    "ResultURL":config('B2CSendResultURL'),
    "QueueTimeOutURL":config('queueTimeoutURL'),
    "Occassion":"Payment"
  }
  response = mpesa_client.B2CSend(payload)

  #wait for the response
  if "OriginatorConversationID" in response:
      return True
  elif "errorCode" in response:
      return False
  else:
      #must be an error with the Mpesa API
      print('Error With Mpesa B2C Send ', flush=True)
      return False

async def initiate_loan_repayment(amount:int, account_number,loan_id):
      #send an API request to initiate deposit
      mpesa_client = Mpesa()
      payload = {
        "AccessToken": mpesa_client.getAccessToken(config('consumer_key'), config('consumer_secret')),
        "BusinessShortCode":config('shortcode'),
        "Password":mpesa_client.encodePassword(config('shortcode'), config('passkey')),
        "Amount":amount,
        "PartyA":account_number,
        "PartyB":config('shortcode'),
        "PhoneNumber":account_number,
        "CallBackURL":config('stkCallBackURL'),
        "AccountReference":loan_id,
        "TransactionDesc":'Mpesa Deposit'
      }
      response = mpesa_client.stkPush(payload)
      if "responseCode" in response:
        return True
      else:
        return False

def getPaybillBalance(shortcode):
	if shortcode == config('shortcode'):
		identifier = "1"
		consumer_key = config('consumer_key')
		consumer_secret = config('consumer_secret')
		Initiator = config('Initiator')
		SecurityCredential = config('SecurityCredential')
	elif shortcode == config('shortcode2'):
		identifier = "2"
		consumer_key = config('consumer_key2')
		consumer_secret = config('consumer_secret2')
		Initiator = config('Initiator2')
		SecurityCredential = config('SecurityCredential2')

	mpesa_client = Mpesa()
	payload = {
    "AccessToken":mpesa_client.getAccessToken(consumer_key, consumer_secret),
    "Initiator":Initiator,
    "SecurityCredential":SecurityCredential,
    "PartyA":shortcode,
    "ResultURL":config('paybillBalanceResultURL')+identifier+'/'+token +'/',
    "QueueTimeOutURL":config('queueTimeoutURL')+ token +'/',
    "Remarks":"get balance"
  }
  response = mpesa_client.getBalance(payload)
	if not "OriginatorConversationID" in response:
		print("Error Sending Balance Query for shortcode line=1378*", flush=True)
    return False



