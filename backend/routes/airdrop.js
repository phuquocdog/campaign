var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DATABASE || 'airdrop',
  password: process.env.POSTGRES_PASSWORD || 'passes',
  port: 5432,
})

const getUserById = async (id) => {
  return await pool.query('SELECT * FROM airdrop_list WHERE eth_address = $1', [id])
 
}
async function insert(body) {
  const { name, wallet, eth_address,telegram } = body

  if (!eth_address) {
    return false;
  }
  let check = await getUserById(eth_address);

  if (check.rows.length > 0) {
    return false;
  }
  let date = new Date().toISOString().slice(0, 10);

  const result = await pool.query(
    'INSERT INTO airdrop_list (name, wallet, eth_address,telegram,created_at) VALUES ($1, $2, $3, $4, $5)',
    [name, wallet,eth_address,telegram, date]
  )

  console.log('rows', result)
  return result;

}
/* GET home page. */
router.post('/', function(req, res, next) {

  const { name, wallet, eth_address,telegram } = req.body

  let data = null;
  insert(req.body).then(r => {
      res.send({'data' : r});
  });  

});

module.exports = router;
