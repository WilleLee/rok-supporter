const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "admin",
  password: "rokorange",
  port: 3306,
  database: "rok_supporter",
});

module.exports = conn;
