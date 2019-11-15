const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static('assets'));
app.use(express.json());


//Reverser of Sith
app.post('/sith', (req, res) => {
  let texts = req.body;
  let temp = [];
  const word = ['Arrgh.', 'Uhmm.', 'Err..err.err.', 'Hmmm.'];
  if(texts){
    firstArray = texts.text.toLowerCase().split(".");
    console.log(firstArray);

    for(let fa of firstArray){
      if(fa == ''){
        break;
      }
      secondArray = fa.split(" ");
      console.log(secondArray);

      for(let i = 0; i < secondArray.length; i++){
        if(secondArray[i] == ''){
          continue;
        }
        if(i+1 >= secondArray.length){
          temp.push(`${secondArray[i]}.`);
          break;
        }
        temp.push(secondArray[i+1]);
        temp.push(secondArray[i]);
        console.log(temp);
        i++;
      }
      for(i = 0; i < Math.ceil(Math.random()*2); i++){
        temp.push(word[Math.floor(Math.random()*4)]);
      }
      secondArray = temp.join(" ");
      console.log(secondArray);
    }
    firstArray = temp.join(" ").replace(/^\S/g, (L) => L.toUpperCase());
    res.json({ "sith_text": firstArray });
  }
  else {
    res.json({ error: "Feed me some text you have to, padawan young you are. Hmmm." });
  }
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});