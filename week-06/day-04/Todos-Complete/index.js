const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 8080;

var todos = [
  {
    "id": 1,
    "text": "Wake up",
    "done": true
  },
  {
    "id": 2,
    "text": "Do some work",
    "done": false
  }
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/api/todos', (req, res) => {
  console.log('200');
  res.send(todos);
});

app.post('/api/todos', (req, res) => {
  let requestBody = req.body;
  console.log(requestBody);
  console.log(requestBody.text);
  if(!requestBody.text){
    res.sendStatus(400);
  }
  else{
    let tid = (todos[todos.length-1].id + 1) || 1;
    let ttext = requestBody.text;
    let tdone = requestBody.done || false;
    todos.push({ id: tid, text: ttext, done: tdone });
    res.sendStatus(201);
  }
  
  //res.render('home', { todos });
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos.map((element, index) => {
    if(element.id == id){
      todos.splice(index, 1);
      res.sendStatus(204);
    }
  })
  res.status(404).send('Wrong id');
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos.map(element => {
    if(element.id == id){
      element.done = req.body.done;
      console.log('200');
      res.send(todos);
      //res.render('home', { todos });
    }
  })
  res.status(404).send('Wrong id!');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});