'use strict'

const obj = { c:4, g:10, e:40, t:20 };

let max = [null, 0];

function findMax(obj){
  for(let num of Object.entries(obj)){
    if(max[1] < num[1]){
      max = num;
    }
  }
  return max;
}

console.log(findMax(obj));