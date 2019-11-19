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
  database: 'Bookstore',
  schema: 'bookstore'
});

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

  console.log(fcategory);
  console.log(fpublisher);
  console.log(fplt);
  console.log(fpgt);

  let querydetail = `SELECT book_name as Name, aut_name as Author, cate_descrip as Category, pub_name as Publisher, book_price as Price FROM book_mast as A, author as B, category as C, publisher as D WHERE A.aut_id = B.aut_id AND A.cate_id = C.cate_id AND A.pub_id = D.pub_id`;
  
  if(fcategory){
    querydetail += ` AND cate_descrip = "${fcategory}"`;
  }
  if(fpublisher){
    querydetail += ` AND pub_name = "${fpublisher}"`;
  }
  if(fplt){
    querydetail += ` AND book_price <= ${fplt}`;
  }
  if(fpgt){
    querydetail += ` AND book_price >= ${fpgt}`;
  }

  querydetail += ";";
  conn.query(querydetail, (err, details) => {
    if(err){
      console.log(err);
    }
    //console.log(details);
    res.render('bookdetail', { details });
  })
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});