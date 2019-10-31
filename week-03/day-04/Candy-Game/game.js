'use strict'

var candies = document.querySelector('.candies');
var candiesAmount = 1000;
var lollypops = document.querySelector('.lollypops');
var lollypopAmount = 3;
var speed = document.querySelector('.speed');
var speedNum = 0;


var createCandy = document.querySelector('.create-candies');
var buyLp = document.querySelector('.buy-lollypops');
var candyMach = document.querySelector('.candy-machine');

createCandy.addEventListener('click', function(){
  candiesAmount = parseInt(candiesAmount) + 1;
  candies.textContent = candiesAmount;
});

buyLp.addEventListener('click', ()=> {
  if(candiesAmount >= 100){
    candiesAmount = parseInt(candiesAmount) - 100;
    candies.textContent = candiesAmount;
    lollypopAmount++;
    lollypops.textContent += '🍭';
  }
  speedNum = parseInt(lollypopAmount/10).toFixed(0);
  speed.textContent = speedNum;
})

candyMach.addEventListener('click', ()=> {
  speedNum *= 10;
  speed.textContent = speedNum;
})

window.onload = () => {
  setInterval(() => {
    candiesAmount = parseInt(candiesAmount) + parseInt(speedNum);
    candies.textContent = candiesAmount;
    
  }, 1000);
}