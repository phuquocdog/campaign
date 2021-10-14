import React, { useState,useEffect,useReducer,useCallback } from 'react';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
//import { providers } from 'ethers'
const axios = require('axios');
const initialValues = {
  firstName: "",
  lastName: "",
  telegram: "",
  wallet: ""
};
const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  }
}


const CheckoutForm = () => {

  const [values, setValues] = useState(initialValues);

  const loadBlockchainData = async () => {
    
    //this.setState({ account: accounts[0] })
  }

  const connect = useCallback(async function () {
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();

    //const signer = web3.getSigner()
    const address = await web3.eth.getAccounts();
    const ETHPLORER_TOKEN= 'EK-82oc6-zkcE1EG-AuqNJ';
    let url = 'https://api.ethplorer.io/getAddressInfo/' + address[0] + '?apiKey=' + ETHPLORER_TOKEN;
    const request = await axios.get(url)
    

    if (request.data.hasOwnProperty('tokens')) {
        //
        let tokens = request.data.tokens;
        let claimn = false;
        tokens.forEach((item, index) => {
            let balance = item.balance / 1000000000000000000;
            if (item.tokenInfo.symbol == 'AKITA' && balance > 50000000) {
              claimn =  true;
            }
            if (item.tokenInfo.symbol == 'SHIB' && balance > 50000000) {
              claimn = true;
            }
            if (item.tokenInfo.symbol == 'xSHIB' && balance > 50000000) {
              claimn = true;
            }
        });

        if (claimn) {
          console.log('firstName', values.firstName)
          let body = {
              name: values.firstName + ' ' + values.lastName,
              telegram: values.telegram,
              wallet: values.wallet,
              eth_address: address[0]
            }
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body)
          };
          const response = await fetch('https://buy.phuquoc.dog/api/airdrop', requestOptions);
          const data = await response.json();
          console.log(data);

          if (data.data == false) {
            alert('You already in lists get PQD coin');
          } else {
            alert('You are eligible to receive PQD, the system will automatically distribute after 24 hours ');
          }

          // send a POST request
          // axios({
          //   method: 'POST',
          //   url: 'https://buy.phuquoc.dog/api/airdrop',
          //   data: {
          //     name: values.firstName + ' ' + values.lastName,
          //     telegram: values.telegram,
          //     wallet: values.wallet,
          //     eth_address: address[0]
          //   }
          // });
        } else {
          alert('You are not enough condition to get PQD coin');
        }
    } else {

      alert('You are not enough condition to get PQD coin');
    }
  }, [])

    useEffect(() => {  

      //loadBlockchainData();

    });

  const handleSubmit = async (e) => {
  	e.preventDefault();
        
    connect();
  }

  const handleInputChange = (e) => {
  	console.log(e.target);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onChargeSuccess = () => {

  	console.log('succeed');
  }
  const onChargeFailure = () => {
  	console.log('onChargeFailure');
  	//Thanks For the Payment
  }
  

  return (

      <form class="needs-validation" onSubmit={handleSubmit}>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" name="firstName" value={values.firstName} onChange={handleInputChange} required />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" name="lastName" value={values.lastName} onChange={handleInputChange} required />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

           

            <div class="mb-3">
              <label for="wallet">Phu Quoc Dog wallet<span class="text-muted">              
              <a href="https://phuquoc.dog/how-to-store-pqd-coins-with-polkadot-wallet/">[How to store PQD coins with Polkadot wallet]</a>
              </span></label>
              <input type="text" required class="form-control" name="wallet" value={values.wallet} onChange={handleInputChange} />
              <div class="invalid-feedback">
                Please enter a valid wallet address for send coin.
              </div>
            </div>

             <div class="mb-3">
              <label for="username">Telegram <a target="blank" href="https://t.me/phuquocdog">[Join Telegram]</a></label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" name="telegram" value={values.telegram} onChange={handleInputChange}/>
              </div>
            </div>

            <hr class="mb-4"/>

            <button className="btn btn-success">
              Click to get PQD
            </button>          
          </form>
    );
}
export default CheckoutForm