const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//Doubling
app.get('/doubling', (req, res) => {
  let number = req.query.input;
  if(!number){
    //input = {...input, error = "Please provide an input!"};
    res.json({ error: "Please provide an input!" });
  }
  else {
    //input = { ...input, received = number, result = number * 2 };
    res.json({ received: number, result: number * 2 });
  }
})

//Greeter
app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;

  if(name && title){
    res.json({ 
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    });
  }
  else if (!name && title) {
    res.json({ error: "Please provide a name!" });
  }
  else if (name && !title) {
    res.json({ error: "Please provide a title!" });
  }
  else {
    res.json({ error: "Please provide a name and a title!" });
  }
})

//ApendA
app.get('/appenda/:appendable', (req, res) => {
  let appended = req.params.appendable;
  if(appended){
    res.json({ appended: `${appended}a`});
  }
  else {
    res.sendStatus(404);
  }
})

//doUntil
app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let { until } = req.body;
  let sum = 0;
  let factor = 1;
  if(action == 'sum'){
    for(let i = until; i > 0; i--){
      sum += i;
    }
    res.json({ result: sum });
  }
  else if(action == 'factor'){
    for(let i = until; i > 0; i--){
      factor *= i;
    }
    res.json({ result: factor });
  }
})



//Arrays
app.post('/arrays', (req, res) => {
  let array = req.body;
  let sum = 0;
  let multi = 1;
  let resultsArray = [];
  if(array.what == 'sum'){
    for(let i of array.numbers){
      sum += i;
    }
    console.log(sum);
    res.json({ result: sum });
  }
  else if(array.what == 'multiply'){
    for(let i of array.numbers){
      multi *= i;
    }
    console.log(multi);
    res.json({ result: multi });
  }
  else if(array.what == 'double'){
    for(let i of array.numbers){
      resultsArray.push(i*2);
    }
    console.log(resultsArray);
    res.json({ result: resultsArray });
  }
  else {
    res.json({ error: "Please provide what to do with the numbers!" });
  }
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});