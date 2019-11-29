const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

let votes = [];

let conn = mysql.createConnection ({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'poll',
});

//GET /api/poll
app.get('/api/poll', (req, res) => {
  let queryget = 
    `SELECT title, vid, name, votes 
    FROM poll.questions 
    LEFT JOIN poll.options 
    ON questions.qid = options.qid 
    WHERE questions.qid = 1;`;
  conn.query(queryget, (err, details) => {
    if(err){
      console.log('cannot get', err);
      return res.sendStatus(500);
    }
    votes = details;
    res.type('application/json');
    return res.json(votes);
  })
})

//POST /api/vote
app.post('/api/vote/:optionId', (req, res) => {
  //let requestBody = req.body;
  const vid = req.params.optionId;
  //console.log(vid);

  let querypost = `UPDATE poll.options SET votes = votes + 1 WHERE vid = ${vid};`;
  conn.query(querypost, (err, result) => {
    if(err){
      console.log('cannot insert', err);
      return res.sendStatus(500);
    }
    //console.log(result);
    let querypostget = 
      `SELECT title, vid, name, votes 
      FROM poll.questions 
      LEFT JOIN poll.options 
      ON questions.qid = options.qid 
      WHERE questions.qid = 1;`;
    conn.query(querypostget, (err, details) => {
      console.log("come in");
      if(err){
        console.log('cannot get', err);
        return res.sendStatus(500);
      }
      res.set('Content-Type', 'application/json');
      return res.status(201).json(details);
    })
    
  })
  //return res.sendStatus(200);
})

//============== Optional =======================
//Check new vote
app.get('/api/poll/:id', (req, res) => {
  const qid = req.params.id;

  let queryget = 
    `SELECT title, vid, name, votes 
    FROM poll.questions 
    LEFT JOIN poll.options 
    ON questions.qid = options.qid 
    WHERE questions.qid = ${qid};`;
  conn.query(queryget, (err, details) => {
    if(err){
      console.log('cannot get', err);
      return res.sendStatus(500);
    }
    votes = details;
    res.type('application/json');
    return res.json(votes);
  })
})

//create new vote
app.post('/api/poll', (req, res) => {
  let requestBody = req.body;
  let qtitle = requestBody.title;
  
  let queryputPost = `INSERT INTO poll.questions (title) VALUES ("${qtitle}");`;
  conn.query(queryputPost, (err, details) => {
    if(err){
      console.log('cannot insert', err);
      return res.sendStatus(500);
    }
    res.set('Content-Type', 'application/json');
    return res.status(201);
  })

})
//Vote with new question
app.post('/api/vote/:id/:optionId', (req, res) => {
  const qid = req.params.id;
  const vid = req.params.optionId;
  console.log(vid);

  let querypost = `UPDATE poll.options SET votes = votes + 1 WHERE vid = ${vid};`;
  conn.query(querypost, (err, result) => {
    if(err){
      console.log('cannot insert', err);
      return res.sendStatus(500);
    }
    console.log(result);
    let querypostget = 
      `SELECT title, vid, name, votes 
      FROM poll.questions 
      LEFT JOIN poll.options 
      ON questions.qid = options.qid 
      WHERE questions.qid = ${qid}};`;
    conn.query(querypostget, (err, details) => {
      console.log("come in");
      if(err){
        console.log('cannot get', err);
        return res.sendStatus(500);
      }
      res.set('Content-Type', 'application/json');
      return res.status(201).json(details);
    })
  })
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});