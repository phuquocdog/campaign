import React, { useState } from 'react';

function CheckoutForm() 
{

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [wallet, setWallet] = useState("");

  
 
  const handleSubmit = (e) => {

  	e.preventDefault();

  	

  }
  
  return (
      <form class="needs-validation">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

           

            <div class="mb-3">
              <label for="wallet">Phu Quoc Dog wallet<span class="text-muted">              
              <a href="https://phuquoc.dog/how-to-store-pqd-coins-with-polkadot-wallet/">[How to store PQD coins with Polkadot wallet]</a>
              </span></label>
              <input type="text" required class="form-control" id="wallet" value={wallet} onChange={(e) => setWallet(e.target.value)} />
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
                <input type="text" class="form-control" id="telegram" value={telegram} onChange={(e) => setTelegram(e.target.value)}/>
              </div>
            </div>

            <hr class="mb-4"/>

            <h4 class="mb-3">Payment</h4>
            <div id="pay-button" onClick={handleSubmit} data-payment-id="PAYMENT_UNIQUE_ID">
            </div>
            
          </form>
    );
}

export default CheckoutForm