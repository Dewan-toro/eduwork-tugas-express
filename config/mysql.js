const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "root",
  database: "eduwork-cruds",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = connection;
