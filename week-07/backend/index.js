const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

let posts = [];

let conn = mysql.createConnection ({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'reddit',
  //schema: 'reddit'
});

app.get('/posts', (req, res) => {
  //console.log(req.headers);
  //console.log(req.accepts('application/json'));
  if(req.accepts('application/json')){
    let queryget = `SELECT id, title, url, timestamp, score, username, vote, comments FROM reddit, userinfo WHERE reddit.uid = userinfo.uid;`;
    conn.query(queryget, (err, details) => {
      if(err){
        console.log('cannot get', err);
        return res.sendStatus(500);
      }
      //console.log(typeof(details));
      posts = details;
      //console.log(posts);
      res.type('application/json');
      res.json(posts);
    })
  }
  else {
    return res.status(406).send('not accept json');
  }
})

app.post('/posts', (req, res) => {
  let requestBody = req.body;
  let ptitle = requestBody.title;
  let purl = requestBody.url || '';
  let ptimestamp = Date.now();

  if(req.accepts('application/json') || req.is('application/json')){
    let querypost = `INSERT INTO reddit (title, url, timestamp) VALUES ("${ptitle}", "${purl}", "${ptimestamp}");`;
    conn.query(querypost, (err, result) => {
      if(err){
        console.log('cannot insert', err);
        return res.sendStatus(500);
      }
      let querypostget = `SELECT * FROM reddit ORDER BY id DESC LIMIT 1;`;
      conn.query(querypostget, (err, details) => {
        if(err){
          console.log('cannot get', err);
          return res.sendStatus(500);
        }
        res.set('Content-Type', 'application/json')
        return res.status(201).json(details);
      })
      //res.set('Content-Type', 'application/json');
      //res.sendStatus(404);
    })
  }
  else {
    return res.status(406).send('request is not right');
  }
})

app.put('/posts/:id/:vote', (req, res) => {
  const id = req.params.id;
  let vote = req.params.vote;
  //console.log(vote);
  if(req.accepts('application/json')){
    let queryputUP = `UPDATE reddit SET score = score + 1 WHERE id = "${id}";`;
    let queryputDOWN = `UPDATE reddit SET score = score - 1 WHERE id = "${id}";`;
    conn.query(vote == "upvote" ? queryputUP : queryputDOWN, (err, results) => {
      if(err){
        console.log('cannot insert', err);
        return res.sendStatus(500);
      }
      let queryputget = `SELECT * FROM reddit WHERE id = "${id}";`;
      conn.query(queryputget, (err, details) => {
        if(err){
          console.log('cannot get', err);
          return res.sendStatus(500);
        }
        res.set('Content-Type', 'application/json')
        return res.status(200).json(details);
      })
      //return res.sendStatus(500);
      //res.status(200).send({ details });
    })
  }
  else {
    return res.status(406).send('not accept json');
  }
})

//Optional TODO

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});