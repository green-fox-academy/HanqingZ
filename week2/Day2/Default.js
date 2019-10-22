'use strict'

function coffee (sugar = false, milk = false){
  if(sugar === true && milk === true){
    return console.log('coffee with sugar and with milk');
  }
  return console.log('coffee' + (sugar === true ? ' with sugar' : '') + (milk === true ? ' with milk' : ''));

}

coffee(true, true);
coffee(false, true);
coffee(true, false);
coffee(false, false);