const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tasksDB"
});

module.exports = connection;