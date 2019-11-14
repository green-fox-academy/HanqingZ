const express = require('express');
const app = express();
const PORT = 3000;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  res.render('home', { todos });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});