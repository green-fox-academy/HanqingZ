'use strict'

var scrollThreshold = 300;

var body = document.querySelector('body');
var div = document.createElement('section');
body.appendChild(div);

const initialSize = window.innerWidth/200 * (scrollThreshold/10);

function addNewSquare(number){
  for(let i = 0; i < number; i++){
    var square = document.createElement('div');
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
    div.appendChild(square);
  }
}

let initial = addNewSquare(initialSize);

document.addEventListener('scroll', function(){
  if(window.scrollY + window.innerHeight > body.offsetHeight - scrollThreshold){
    addNewSquare(10);
  }
  if(window.scrollTop < document.innerHeight - scrollThreshold){
    var square = document.createElement('div');
    square.style.backgroundColor = color[Math.floor(Math.random()*5)];
    body.insertAdjacentElement('afterbegin', square);
  }
})
