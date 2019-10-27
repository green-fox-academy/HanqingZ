'use strict'

function findAverage(arr) {
  const lengths = arr.length;
  let sum = 0;

  for(let i of arr){
    sum += parseInt(i);
  }

  return sum/lengths;
}

console.log(findAverage([1,2,3,4,5]));