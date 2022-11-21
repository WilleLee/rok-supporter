const maria = require('mysql');

const conn = maria.createConnection({
  host : '',
  port : port,
  user : 'root',
  password : 'password',
  database : 'database'
})

module.exports = conn;