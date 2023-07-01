# Azina Finance
![alt text](https://github.com/freelancer254/azina/blob/main/images/azina.PNG?raw=true)
Azina offers crypto backed loans for local fiat. Users are able to request and pay for loans in their own local currency 
or currency of choice. With Azina, users can borrow KES against FTM without worrying about the USD exchange rate volatility, misuse of their collateral and enjoy 
decentralized collateral management.

## Problems That Azina Solves
Azina addresses the following problems:
1. Complexities in USD based crypto-backed loans in emerging markets
- Fluctuations in USD exchange rates
- Overdependence on P2P liquidity
- P2P adds additional steps and risks in the loan process
2. Misuse/Loss of user funds due to lack of transparency in collateral management


## Azina High Level Architecture
![alt text](https://github.com/freelancer254/azina/blob/main/images/azinaarchitecture.png?raw=true)
Each supported collateral on Azina is deployed on its own contract, illustrated as Azina Loan Smart Contract. There is a verification smart contract
used to verify the verification status of the accounts interacting with the platform. The frontend allows interaction with the api and smart contracts.
Through the UI, a user can request a loan and manage the collateral. The transparency built in Azina makes this optional. Repayment of loans is done via the api,
only the admin can repay a loan on behalf of the user. Fiat disbursements and repayments are facilitated by payment processors, in this case, Mpesa. To mitigate risk 
to the platform, when the loan to value (LTV) reaches the liquidation threshold, collateral is liquidated through Spookyswap.



## Video Demonstration
[Video On Youtube](https://www.youtube.com/)

## Get Started Here
```
https://azina.online
```
Access the frontend at\
[https://azina.online](https://azina.online)


## Account Verification

You will then be required to verify your account\
For demonstration purposes, account verification is simulated\
Loan disbursement and repayment is also simulated


## Contract Addresses
* [Azina verification](https://ftmscan.com/address/0x660280187d6776aDBB0b217926329c1c0f07C2a3#code) - Manages verification of accounts
* [Azina Fantom](https://ftmscan.com/address/0x3EaC5be319fAD81f3B55E696f3c4ce25A8B78256#code) - Manages loans against FTM
* [Azina chainlink](https://ftmscan.com/address/0xF2a394C5ec03bCCD6d01e2288F061D099C1e2e4E#code) - Manages loans against ChainLink

## Built With
* [Fantom Opera](https://fantom.foundation/) - Smart Contract Deployment
* [chainlink services](https://chain.link/) - Automation, Data Feeds
* [Quick Node](https://alchemy.com/) - RPC Provider
* [Solidity](https://docs.soliditylang.org/en/v0.8.7/) - The smart contract language
* [web3py](https://web3py.readthedocs.io/en/stable/) - For smart contract interaction
* [ethers js](https://docs.ethers.io/v5/) - For smart contract interaction
* [Quasar Framework](https://quasar.dev/) - For template styling and responsiveness
* [FastAPI Framework](https://fastapi.tiangolo.com/) - For the api
* [Deta Space](https://deta.space/) - For the cloud hosting
* [Mpesa](https://developer.safaricom.co.ke/) - For payment processing

## Authors

* **Robert Mutua** - *Buidling on web3* - [freelancer254](https://github.com/freelancer254)







