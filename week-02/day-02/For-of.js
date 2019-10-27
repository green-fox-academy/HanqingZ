'use strict'

const data = [5, 1, 2, 9, 7, 3, 8];

var max = 0;

for(let i of data){
  if(max < i){
    max = i;
  }
}

console.log(max);