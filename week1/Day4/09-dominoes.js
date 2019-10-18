'use strict';

const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function placeInOrder(dominoes){
  for(let i = 0; i < dominoes.length-1; i++){
    if(i == dominoes.length - 2){
      break;
    }
    
    if(dominoes[i].value[1] === dominoes[i+1].value[0]){
      continue;
    }

    for(let j = i + 1; j < dominoes.length; i++){
      if(dominoes[j].value[0] === dominoes[i].value[1]){
        let temps = dominoes[j];
        dominoes[j] = dominoes[i+1];
        dominoes[i+1] = temps;
      }
    }
  }
}

placeInOrder(dominoes);
console.log(dominoes.toString());