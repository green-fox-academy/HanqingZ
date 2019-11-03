'use strict'

const candies = document.querySelector('.candies');
let candiesAmount = 0;
const lollypops = document.querySelector('.lollypops');
let lollypopAmount = 3;
const speed = document.querySelector('.speed');
let speedNum = 0;


const createCandyButton = document.querySelector('.create-candies');
const buyLpButton = document.querySelector('.buy-lollypops');
const candyMachine = document.querySelector('.candy-machine');

createCandyButton.addEventListener('click', () => {
  candiesAmount = candiesAmount + 1;
  candies.textContent = candiesAmount;
});

buyLpButton.addEventListener('click', ()=> {
  if(candiesAmount >= 100){
    candiesAmount = parseInt(candiesAmount) - 100;
    candies.textContent = candiesAmount;
    lollypopAmount++;
    lollypops.textContent += '🍭';
  }
  speedNum = Math.floor(lollypopAmount/10).toFixed(0);
  speed.textContent = speedNum;
})

candyMachine.addEventListener('click', ()=> {
  speedNum *= 10;
  speed.textContent = speedNum;
})

window.onload = () => {
  setInterval(() => {
    candiesAmount = parseInt(candiesAmount) + parseInt(speedNum);
    candies.textContent = candiesAmount;
    
  }, 1000);

}