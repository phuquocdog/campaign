import logo from './logo.svg';
import './App.css';
import CheckoutForm from './CheckoutForm';
import {useState, useEffect} from 'react';

const Thanks = (props) => {
  if (props.isPayment) {
      return (
      <p>
        Thanks For the Payment
      </p>
    );
  }
  return <></>;
}

const App = () => {
  const [isPayment, setIsPayment] = useState(false);
  
  useEffect(() => {

    window.addEventListener('change', (event) => {
      //console.log(event)
      //setIsPayment(true);

    });

  });
const handleEvent = () => {
    alert("I was clicked");
  };
  return (
    <div class="container">
      <div class="py-5 text-center">
        <img class="logo d-block mx-auto mb-4" src="https://gblobscdn.gitbook.com/spaces%2F-MfYDzBxtTdyfUgSfrld%2Favatar-1627488491088.png?alt=media" alt="" width="72" height="72"/>
        <h2>Checkout form</h2>
        <p class="lead">Buy Phu Quoc Dog Coin and Join the moon mission. 🐶</p>
        <Thanks isPayment={isPayment} />
      </div>
  

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">1</span>
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
          <CheckoutForm isPayment={handleEvent}/>
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
