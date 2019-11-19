let mysql = require('mysql');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bookstore',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.end();