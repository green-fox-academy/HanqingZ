'use strict'

let text = document.querySelector('h1');

window.addEventListener('keyup', event => {
  console.log(event);
  text.textContent = `Last pressed key code is: ${event.keyCode} ${event.code}`;
})