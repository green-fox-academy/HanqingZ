//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
const mysql = require('mysql');
const express = require('express');
//const pms = require('promise-mysql');
const PORT = 3000;
const app = express();


app.use(express.json());
app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

let conn = mysql.createConnection ({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'bookstore',
  //schema: 'bookstore'
});

// For Bookstore
app.get('/', (req, res) => {
  const querybl = `SELECT book_name as Name FROM book_mast;`;
  conn.query(querybl, (err, rows) => {
    if(err){
      console.log(err);
    }
    //console.log(rows);
    res.render('booktitle', { rows });
  })
})

app.get('/books', (req, res) => {
  let fcategory = req.query.category;
  let fpublisher = req.query.publisher;
  let fplt = req.query.plt;
  let fpgt = req.query.pgt;

  // console.log(fcategory);
  // console.log(fpublisher);
  // console.log(fplt);
  // console.log(fpgt);

  let querydetail = `SELECT book_name as Name, aut_name as Author, cate_descrip as Category, pub_name as Publisher, book_price as Price FROM book_mast as A, author as B, category as C, publisher as D WHERE A.aut_id = B.aut_id AND A.cate_id = C.cate_id AND A.pub_id = D.pub_id`;
  
  if(fcategory){
    querydetail += ` AND cate_descrip = "${fcategory}"`;}
  if(fpublisher){
    querydetail += ` AND pub_name = "${fpublisher}"`;}
  if(fplt){
    querydetail += ` AND book_price <= ${fplt}`;}
  if(fpgt){
    querydetail += ` AND book_price >= ${fpgt}`;}

  querydetail += ";";
  conn.query(querydetail, (err, details) => {
    if(err){
      console.log(err);
    }
    res.render('bookdetail', { details });
  })
})


// For import User Data
const fs = require('fs');
const csv = require('fast-csv');
let stream = fs.createReadStream("./user_data.csv");
let myData = [];


let csvStream = csv
.parse()
.on("data", function (data){
  myData.push(data);
})
.on("end",function () {
  myData.shift();
  console.log(csvStream);

  let queryCreateUser = `CREATE TABLE IF NOT EXISTS user_data ( id int NOT NULL AUTO_INCREMENT PRIMARY KEY, prefix VARCHAR(10), first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, address VARCHAR(255), height FLOAT, bitcoin_address VARCHAR(255) NOT NULL, color_preference VARCHAR(10) );`;
  let queryInsert = `INSERT INTO user_data VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
})
   


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});