const mysql = require("mysql");
const databasename = "sql11452002";

var pool = mysql.createPool({
  connectionLimit: 100,
  host: "sql11.freemysqlhosting.net",
  user: "sql11452002",
  password: "1FUAU2kBN9",
  database: "sql11452002",
  debug: true
});

function executeQuery(query, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      return callback(err, null);
    } else if (connection) {
      connection.query(query, function (err, rows, fields) {
        connection.release();
        if (err) {
          return callback(err, null);
        }
        return callback(null, rows);
      });
    } else {
      return callback(true, "No Connection");
    }
  });
}

function getResult(query, callback) {
  executeQuery(query, function (err, rows) {
    if (!err) {
      callback(null, rows);
    } else {
      callback(true, err);
    }
  });
}

module.exports = {
  getResult
};
