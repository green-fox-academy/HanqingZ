'use strict'

var button = document.querySelector('button');
var bodyPart = document.querySelector('div');

button.onclick = () => {
  bodyPart.classList.toggle('party');
}