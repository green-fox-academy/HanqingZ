const express = require('express');
//const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

let posts = [];
let userinfo = [];

let conn = mysql.createConnection ({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'reddit',
  //schema: 'reddit'
});

app.post('/user/login', (req, res) => {
  let querylogin = `SELECT * FROM reddit.userInfo;`;
  let username = req.body.username;
  let password = req.body.password;
  let index = 0;

  if(req.accepts('application/json')) {
    conn.query(querylogin, (err, details) => {
      if(err){
        console.log('cannot get', err);
        return res.sendStatus(500);
      }

      userinfo = details;
      userinfo.map(element => {
        if(username == element.username && password == password){
          console.log(element);
          index++;
          res.status(200);
          res.set('Content-Type', 'application/json');
          return res.json({
            "message":"Login Success",
            "userID": element.uid,
            "username": username
          });
        }
      })
      if(index == 0){
        return res.sendStatus(403);
      }
    })
  }
  else{
    return res.sendStatus(403);
  }
})

app.get('/posts', (req, res) => {
  if(req.accepts('application/json')){
    let queryget = 
    `SELECT pid, title, url, timestamp, score, username, vote, comments 
    FROM reddit.posts, reddit.userInfo 
    WHERE posts.uid = userInfo.uid;`;
    conn.query(queryget, (err, details) => {
      if(err){
        console.log('cannot get', err);
        return res.sendStatus(500);
      }
      posts = details;
      res.type('application/json');
      return res.json(posts);
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
  let uid = requestBody.uid;
  let ptimestamp = Date.now();

  if(req.accepts('application/json') || req.is('application/json')){
    let querypost = 
      `INSERT INTO posts (title, url, timestamp, uid) 
      VALUES ("${ptitle}", "${purl}", "${ptimestamp}", ${uid});`;
    conn.query(querypost, (err, result) => {
      if(err){
        console.log('cannot insert', err);
        return res.sendStatus(500);
      }
      let querypostget = `SELECT * FROM posts ORDER BY pid DESC LIMIT 1;`;
      conn.query(querypostget, (err, details) => {
        if(err){
          console.log('cannot get', err);
          return res.sendStatus(500);
        }
        res.set('Content-Type', 'application/json');
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
  if(req.accepts('application/json')){
    let queryputUP = `UPDATE posts SET score = score + 1 WHERE pid = "${id}";`;
    let queryputDOWN = `UPDATE posts SET score = score - 1 WHERE pid = "${id}";`;
    conn.query(vote == "upvote" ? queryputUP : queryputDOWN, (err, results) => {
      if(err){
        console.log('cannot insert', err);
        return res.sendStatus(500);
      }
      let queryputget = `SELECT * FROM posts WHERE pid = "${id}";`;
      conn.query(queryputget, (err, details) => {
        if(err){
          console.log('cannot get', err);
          return res.sendStatus(500);
        }
        res.set('Content-Type', 'application/json');
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

//Optional
app.get('/posts/:id/comments', (req, res) => {
  const pid = req.params.id;
  if(req.accepts('application/json')){
    let queryget = 
    `SELECT cid, text, comments.timestamp, comments.score, username AS comment_username 
    FROM reddit.posts, reddit.comments, reddit.userinfo
    WHERE posts.pid = comments.pid
    AND userinfo.uid = comments.uid
    AND posts.pid = ${pid};`;
    conn.query(queryget, (err, details) => {
      if(err){
        console.log('cannot get', err);
        return res.sendStatus(500);
      }
      posts = details;
      res.type('application/json');
      return res.json(posts);
    })
  }
  else {
    return res.status(406).send('not accept json');
  }
})

app.put('/posts/:id', (req, res) => {
  let requestBody = req.body;
  let ptitle = requestBody.title;
  let purl = requestBody.url || '';
  const id = req.params.id;
  if(req.accepts('application/json')){
    let queryputPost = `UPDATE posts SET title = "${ptitle}", url = "${purl}" WHERE pid = "${id}";`;
    conn.query(queryputPost, (err, details) => {
      if(err){
        console.log('cannot insert', err);
        return res.sendStatus(500);
      }
      return res.sendStatus(200);
    })
  }
  else {
    return res.status(406).send('not accept json');
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});