'use strict'

const url = `http://api.icndb.com/jokes/random`;
  
let div = document.querySelector('div');
let ul = div.appendChild(document.createElement('ul'));
ul.setAttribute('style', 'list-style-type:none; display:flex; flex-wrap:wrap; flex-direction:row; margin:5px; padding:5px;');

fetch(url)
  .then(
    function(response) {
      if(response.status < 200 || response.status >= 300) {
        console.log('Error! ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        let joke = data.value.joke.split('.');
        for(let i = 0; i < joke.length; i++){
          let p = div.appendChild(document.createElement('p'));
          p.textContent = joke[i];
        }
        let button = div.appendChild(document.createElement('button'));
        button.textContent = 'Gimme a joke!';
      });
    })
  .catch(function(error) {
    console.log('Fetch Error ', error);
  })


  button.onclick = () => {
    fetch(url);
  }