'use strict'

const setEntity = [];

function add(arr, num){
  if(arr.indexOf(num) === -1){
    arr.push(num);
  }
}

add(setEntity, 1);
add(setEntity, 2);
add(setEntity, 1);

for (let item of setEntity) {
  console.log(item);
}

//using Array.prototype.includes()

function findNotCommonNumber(arr1, arr2) {
  let result = [];
  for(let i of arr1){
    if(!arr2.includes(i)){
      result.push(i);
    }
  }
  for(let j of arr2){
    if(!arr1.includes(j)){
      result.push(j);
    }
  }
  return result;
}

console.log(findNotCommonNumber([1,2,3],[3,4,5]));