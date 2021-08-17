var express = require('express');
var router = express.Router();

var request = require('request');

// Import the API, Keyring and some utility functions
const { ApiPromise,WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const BN = require('bn.js');


async function transfer(data) {

  if (data.event.type != 'charge:confirmed') {
    return 0;
  }

  const BOB = data.event.data.metadata.custom;
  const provider = new WsProvider(process.env.WS || 'ws://127.0.0.1:9944');
  // Instantiate the API
  const api = await ApiPromise.create({provider});

  // Constuct the keyring after the API (crypto has an async init)
  const keyring = new Keyring({ type: 'sr25519' });

  // Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)
  const alice = keyring.addFromUri(process.env.KEY_PHASE_SECRET);

  const decims = new BN(api.registry.chainDecimals);
  const factor = new BN(10).pow(decims);
  const amount = new BN(1000000).mul(factor);

  console.log(data);
  console.log(process.env.WS);
  

  // Create a extrinsic, transferring 12345 units to Bob
  const transfer = api.tx.balances.transfer(BOB, amount);

  // Sign and send the transaction using our account
  const hash = await transfer.signAndSend(alice);

  console.log('Transfer sent with hash', hash.toHex());

  return hash;

}

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send(req.body)
});

router.post('/', function(req, res) {
  console.log(req.body)
  if (req.param.token != process.env.ACCESS_TOKEN) {
      res.send('You have not permission to action');
      return 0;
  }
  transfer(req.body).then((e) => {
    console.log(e.toHex());
  });
  res.send('Payment success');
});

router.post('/webhook', function(req, res) {
  let data = req.body.data

  if (!data) {
    res.send('Recevied webook something wrong');
    return false;
  }
  let wallet = event.data.metadata.custom;
  request.post({
      'url' : process.env.TELEGRAM_ENDPOINT,
      'json': {
        'chat_id' : process.env.TELEGRAM_CHAT_ID || '',
        'text': 'A Holder with wallet address:' + wallet +
        '\nJust buy 1,000,000 PQD at https://buy.phuquoc.dog',
        'disable_notification': 'true'
      }
  });
  res.send('Recevied webook');
});

module.exports = router;
