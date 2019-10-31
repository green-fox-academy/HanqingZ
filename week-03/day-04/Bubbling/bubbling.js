'use strict'

var image = document.querySelector('.img-inspector');
var buttonAction = document.querySelector('nav');

let x = 0; 
let y = 0;
let backSize = 200;

image.style.backgroundPositionX = '0px';
image.style.backgroundPositionY = '0px';
image.style.backgroundSize = '200%';

buttonAction.addEventListener('click', (event) => {
  if(event.target.dataset.direction == 'up'){
    y-=10;
    image.style.backgroundPosition = (x + 'px ' + y + 'px');
  }
  if(event.target.dataset.direction == 'down'){
    y+=10;
    image.style.backgroundPosition = (x + 'px ' + y + 'px');
  }
  if(event.target.dataset.direction == 'right'){
    x+=10;
    image.style.backgroundPosition = (x + 'px ' + y + 'px');
  }
  if(event.target.dataset.direction == 'left'){
    x-=10;
    image.style.backgroundPosition = (x + 'px ' + y + 'px');
  }
})

buttonAction.addEventListener('click', (event) => {
  if(event.target.dataset.direction == 'in'){
    backSize += 10;
    image.style.backgroundSize = (backSize + '%');
  }
  if(event.target.dataset.direction == 'out'){
    backSize -= 10;
    image.style.backgroundSize = (backSize + '%');
  }
})