import React, { useState } from 'react';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import Button from'react';
const initialValues = {
  firstName: "",
  lastName: "",
  telegram: "",
  wallet: ""
};

function CheckoutForm() 
{

  const [values, setValues] = useState(initialValues);
  const handleSubmit = (e) => {
  	e.preventDefault();

  }
  const handleInputChange = (e) => {
  	console.log(e.target);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  
  return (
      <form class="needs-validation">
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
              <label for="username">Telegram(Optional)</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" name="telegram" value={values.telegram} onChange={handleInputChange}/>
              </div>
            </div>

            <hr class="mb-4"/>

            <h4 class="mb-3">Payment</h4>
            <CoinbaseCommerceButton 
            	checkoutId={'0c7527e8-e682-469f-8616-cd1213b1715c'}
            	wrapperStyle={{ width: '100%' }}
                style={{
                  width: '100%',
                  color: 'green',
                  borderColor: 'green',
                  borderRadius: 4,
                  height: 45,
                  cursor: 'pointer',
                }}
                customMetadata={values.wallet}
            >
            Pay with Coinbase
            </CoinbaseCommerceButton>            
          </form>
    );
}

export default CheckoutForm