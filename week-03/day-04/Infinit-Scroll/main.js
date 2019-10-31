'use strict'

var scrollThreshold = 300;
const color = ['blue', 'red', 'green', 'yellow', 'purple'];

var body = document.querySelector('body');
var div = document.createElement('section');
body.appendChild(div);

let initialSize = window.innerWidth/200 * (scrollThreshold/10);

function addNewSquare(number){
  for(let i = 0; i < number; i++){
    var square = document.createElement('div');
    square.style.backgroundColor = color[Math.floor(Math.random()*5)];
    div.appendChild(square);
  }
}

let initial = addNewSquare(initialSize);

document.addEventListener('scroll', function(){
  if(window.scrollY + window.innerHeight > body.offsetHeight - scrollThreshold){
    addNewSquare(10);
  }
})
