const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

let userCounter = [];
let exits = false;
let passobj = {};
// home page
app.get('/', (req, res) => {
  let names = req.query.name ? req.query.name : 'Guest';

  userCounter.map((element) =>{
    if(names == element.name){
      passobj = {name: names, counter: element.counter++};
      element = passobj;
      exits = true;
    }
  });
  if(!exits){
    passobj = { name: names, counter: 1 };
    userCounter.push(passobj);
  }
  res.render('home', { passobj });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});