const express = require('express');
const app = express();
const PORT = 3000;

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  const {alcohol: alcoholType} = req.query;
  console.log(alcoholType);
  let cocktail = [];

  if(!alcoholType){
    cocktail = cocktails;
    res.render('home', { cocktail, alcoholType, alcoholList });
  }
  else {
    cocktail = cocktails.filter(cocktail => cocktail.contains.indexOf(alcoholType) > -1);
    console.log(cocktail);
    res.render('home', { cocktail, alcoholType, alcoholList });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});