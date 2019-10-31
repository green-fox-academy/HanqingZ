'use strict'

let button = document.querySelector('button');
let list = document.querySelector('ul').getElementsByTagName('li');
let texts = document.querySelector('.result');

button.addEventListener('click', function () {
  texts.textContent = list.length;
})