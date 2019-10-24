'use strict'


function MergeSort(input) {
  if(input.length <= 1){
    return input;
  }
  let middle = Math.floor(input.length/2);
  let left = MergeSort(input.slice(0, middle));
  let right = MergeSort(input.slice(middle));
  return putInOrder(left, right);
}

function putInOrder(left: number[], right: number[]): number[] {
  let newArr = [], leftIndex = 0, rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      newArr.push(left[leftIndex]);
      leftIndex++;
    }
    else{
      newArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return newArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(MergeSort([1,5,6,3,7,4,36,8]));
console.log(MergeSort([1,5,3]));