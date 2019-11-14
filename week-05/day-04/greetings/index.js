const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  let names = req.query.name ? req.query.name : 'Guest';

  res.render('home', {
    name: names
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});