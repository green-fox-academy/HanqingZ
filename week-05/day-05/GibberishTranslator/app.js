const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());


app.post('/translate', (req, res) => {

  let postText = req.body;

  if(postText.lang == "en" && postText.text){
    let gibLang = postText.text;

    gibLang = gibLang.replace(/a/g, 'ala');
    gibLang = gibLang.replace(/i/g, 'ili');
    gibLang = gibLang.replace(/u/g, 'ulu');
    gibLang = gibLang.replace(/e/g, 'ele');
    gibLang = gibLang.replace(/o/g, 'olo');
    
    res.json({ 
      "translated": gibLang,
      "lang": "gibberish" 
    });
  }
  else {
    res.json({ error: "I can't translate that!" });
  }
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});