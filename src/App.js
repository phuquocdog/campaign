import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="py-5 text-center">
        <img class="logo d-block mx-auto mb-4" src="https://gblobscdn.gitbook.com/spaces%2F-MfYDzBxtTdyfUgSfrld%2Favatar-1627488491088.png?alt=media" alt="" width="72" height="72"/>
        <h2>Checkout form</h2>
        <p class="lead">Buy Phu Quoc Dog Coin and Join the moon mission. 🐶</p>
      </div>
    



      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Phu Quoc Dog Coin</h6>
                <small class="text-muted">PQD is the native token of the Phu Quoc Dog network in a similar way that BTC is the native token of Bitcoin blockchain. <strong class="text-success">1PQD = 0.0001 USD</strong></small>
              </div>
              <span class="text-muted"></span>
            </li>
            
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>WE LOVE DOG</small>
              </div>
              <span class="text-success">-$20</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total 1,000,000 PQD</span>
              <strong>$80</strong>
            </li>
          </ul>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

           

            <div class="mb-3">
              <label for="wallet">Phu Quoc Dog wallet<span class="text-muted"></span></label>
              <input type="text" required class="form-control" id="wallet" placeholder="" />
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
                <input type="text" class="form-control" id="username" placeholder="Username" />
                <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

          

           
            <hr class="mb-4"/>
            <div class="mb-3">
              <a href="https://phuquoc.dog/how-to-store-pqd-coins-with-polkadot-wallet/">How to store PQD coins with Polkadot wallet</a>
            </div>
            <hr class="mb-4"/>

            <h4 class="mb-3">Payment</h4>

            
            <hr class="mb-4"/>
            <div id="pay-button" data-payment-id="PAYMENT_UNIQUE_ID"></div>
          </form>
        </div>
      </div>



      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2021-2022 Phu Quoc Dog</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="/">Privacy</a></li>
          <li class="list-inline-item"><a href="/">Terms</a></li>
          <li class="list-inline-item"><a href="/">Support</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
