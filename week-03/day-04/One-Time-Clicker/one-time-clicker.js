'use strict'

let button = document.querySelector('button');
var date = new Date();

let text = document.createElement('p');
let body = document.querySelector('body');
body.insertAdjacentElement('afterbegin', text);

/*
//way one
button.addEventListener('click', function(){
  text.textContent = date;
})
button.addEventListener('click', function(){});
*/

//way two
button.addEventListener('click', function(){
  let clicktime = 0;
  if(clicktime === 0){
    text.textContent = date;
    clicktime++;
  }
})