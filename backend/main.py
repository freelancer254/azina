from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from web3 import Web3
from decouple import config
import json
import requests


app = FastAPI(title="Azina")
origins = [
  "http://localhost:9000",
  "http://127.0.0.1:9000",
  "https://localhost:9000",
  "http://localhost",
  "http://azina.online",
  "https://azina.online",
]

#redirect to the docs
@app.get("/", tags=["Docs"])
async def redirect_docs():
	return RedirectResponse("https://azina-1-e2475129.deta.app/docs")

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
  expose_headers=["*"],
)

@app.get("/loanterms")
async def loan_config():
  with open(f'loanconfig/loanconfig.json') as file:
      return json.load(file)

@app.get("/payment")
async def payment_methods():
    with open(f'payment/paymentmethods.json') as file:
      return json.load(file)

@app.post("/verify", status_code=201)
async def verify_address(address:str = Body()):
      if(Web3.is_address(Web3.to_checksum_address(address))):
          #send verification tx
          w3 = Web3(Web3.HTTPProvider(config("QUICKNODE_URL")))
          contract_details = {}
          with open('contracts/verification.json') as file:
              contract_details = json.load(file)
          verification_contract = w3.eth.contract(address=contract_details.get('address'), abi=contract_details.get('abi'))

          #check if already verified
          if(verification_contract.functions.checkVerificationStatus(Web3.to_checksum_address(address)).call()):
            return {'data':{'verified':True, 'address':address}}
          else:
            #submit new tx
            nonce = w3.eth.get_transaction_count(config('ADMIN'))

            #Build tx for addAddressToWhiteList
            tx = verification_contract.functions.addToWhiteList([Web3.to_checksum_address(address)]).build_transaction({
                'chainId':250,
                'gas':2500000,
                'gasPrice':w3.to_wei('200','gwei'),
                'nonce':nonce
            })
            #sign with private key
            signed_tx = w3.eth.account.sign_transaction(tx, config('PRIVATE_KEY'))

            #send signed_tx
            tx_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)

            #wait for tx to be mined
            tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    
            #check if tx is successful
            if(tx_receipt.get('status')):
                return {'data':{'verified':True, 'address':address}}
            else:
                #error
                raise HTTPException(status_code=500, detail="Request Not Processed, Kindly try again later")
      else:
          #error
          raise HTTPException(status_code=400, detail="Invalid Address")

@app.post("/repay_loan", status_code=201)
async def repay_loan(data:dict = Body()):
      if(Web3.is_address(Web3.to_checksum_address(data.get('address')))):
            #check the loanId
            if (int(data.get('loanId')) < 2540):
              raise HTTPException(status_code=400, detail="Invalid Loan ID")

            w3 = Web3(Web3.HTTPProvider(config("QUICKNODE_URL")))
            contract_details = {}
            with open('loanconfig/loanconfig.json') as file:
                contract_details = [contract for contract in json.load(file).get('collateral') if contract.get('azinaContractAddress') == data.get('address')][0]
            azina_contract = w3.eth.contract(address=contract_details.get('azinaContractAddress'), abi=contract_details.get('azinaContractABI'))

            #retrieve loan to process
            loan = azina_contract.functions.getLoan(int(data.get('loanId'))).call()

            #check if loan exists. For non-existent loans, loanId == 0
            if(int(loan[0]) == 0):
              return {'data':{'details':'Loan Is Not Valid', 'loanId':loan[0], 'status':loan[9]}}
            
            #check loan status -0 Active, 1 Completed, 2 Liquidated, 3 Requested
            if(not int(loan[9]) == 0):
              return {'data':{'details':'Loan Is Not Active', 'loanId':loan[0], 'status':loan[9]}}
            

            #get loan balance
            loan_balance = int(azina_contract.functions.LoanBalance(int(loan[0])).call())

            amount = int(data.get('amount'))
            if (amount > loan_balance):
              amount = loan_balance

            #submit new tx
            nonce = w3.eth.get_transaction_count(config('ADMIN'))

            #Build tx for processLoanRequest
            tx = azina_contract.functions.Repayment(int(loan[0]),amount).build_transaction({
                'chainId':250,
                'gas':2500000,
                'gasPrice':w3.to_wei('200','gwei'),
                'nonce':nonce
            })
            #sign with private key
            signed_tx = w3.eth.account.sign_transaction(tx, config('PRIVATE_KEY'))

            #send signed_tx
            tx_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
            #send amount to user via payment method

            # #wait for tx to be mined
            # tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

            # #check if tx is successful
            # if(tx_receipt.get('status')):
            return {'data':{'success':True, 'loanId':loan[0],"tx_hash":tx_hash}}
            # else:
            #     #error
            #     raise HTTPException(status_code=500, detail="Request Not Processed, Kindly try again later")
      else:
          #error
          raise HTTPException(status_code=400, detail="Invalid Address")


@app.post("/process_loan", status_code=201)
async def process_loan(data:dict = Body()):

      if(Web3.is_address(Web3.to_checksum_address(data.get('address')))):
            #check the loanId
            if (int(data.get('loanId')) < 2540):
              raise HTTPException(status_code=400, detail="Invalid Loan ID")

            w3 = Web3(Web3.HTTPProvider(config("QUICKNODE_URL")))
            contract_details = {}
            with open('loanconfig/loanconfig.json') as file:
                contract_details = [contract for contract in json.load(file).get('collateral') if contract.get('azinaContractAddress') == data.get('address')][0]
            azina_contract = w3.eth.contract(address=contract_details.get('azinaContractAddress'), abi=contract_details.get('azinaContractABI'))

            #retrieve loan to process
            loan = azina_contract.functions.getLoan(int(data.get('loanId'))).call()

            #check loan status -0 Active, 1 Completed, 2 Liquidated, 3 Requested
            if(not int(loan[9]) == 3):
              return {'data':{'processed':True, 'loanId':loan[9]}}

            with open('loanconfig/loanconfig.json') as file:
                currencies = json.load(file).get('currencies')

            with open('loanconfig/loanconfig.json') as file:
                interest_rates = json.load(file).get('interestrates')

            #calculate loan amount
            loan_details = await  calculateLoanAmount(loan, contract_details, currencies, interest_rates)

            #submit new tx
            nonce = w3.eth.get_transaction_count(config('ADMIN'))

            #Build tx for processLoanRequest
            tx = azina_contract.functions.processLoanRequest(int(loan[0]),loan_details.get('amount'),loan_details.get('interest_rate'),loan_details.get('fx_rate')).build_transaction({
                'chainId':250,
                'gas':2500000,
                'gasPrice':w3.to_wei('200','gwei'),
                'nonce':nonce
            })
            #sign with private key
            signed_tx = w3.eth.account.sign_transaction(tx, config('PRIVATE_KEY'))

            #send signed_tx
            tx_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
            #send amount to user via payment method

            # #wait for tx to be mined
            # tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

            # #check if tx is successful
            # if(tx_receipt.get('status')):
            return {'data':{'success':True, 'loanId':loan[0],"tx_hash":tx_hash}}
            # else:
            #     #error
            #     raise HTTPException(status_code=500, detail="Request Not Processed, Kindly try again later")
      else:
          #error
          raise HTTPException(status_code=400, detail="Invalid Address")

#returns requested loanAmount if loanAmount < maxLTV, else returns maxLTV
async def calculateLoanAmount(loan, collateralDetails, currencies, interest_rates):
      #getPrice from coingecko
      try:
        if(collateralDetails.get('id')=="fantom"):
          res = requests.get("https://api.coingecko.com/api/v3/simple/price?ids=fantom&vs_currencies=usd").json()
          price = res['fantom']['usd']
        else:
          res = requests.get("https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd").json()
          price = res['chainlink']['usd']
      except:
        return HTTPException(status_code=500, detail="Something went wrong")

      with open('payment/paymentmethods.json') as file:
          payment_method = [payment_method for payment_method in json.load(file) if payment_method.get('paymentMethodId') == loan[3]][0]
      fx = [currency for currency in currencies if currency.get('id')==payment_method.get('currency')][0].get('fx')
      collateral_local_fiat = int((price*fx*int(loan[1]))/10**collateralDetails.get('decimals'))
      interest_rate = interest_rates.get(str(loan[4]))[0]*10**8
      if(int(loan[2]) < collateralDetails.get('maxLTV') * collateral_local_fiat and loan[2] > 0 ):
        return {"amount":loan[2],"interest_rate":int(interest_rate),"fx_rate":int(fx*10**8),'payment_method':payment_method}
      else:
        return {"amount":int(collateralDetails.get('maxLTV') * collateral_local_fiat),"interest_rate":int(interest_rate),"fx_rate":fx*10**8,'payment_method':payment_method}