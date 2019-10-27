'use strict'

function BubbleSort(input) {
  for(let i = 0; i < input.length - 1; i++){
    for(let j = i; j < input.length; j++){
      if(input[j] > input[j+1]){
        //input[j] = [input[j+1], input[j+1] = input[j]][0];
        [input[j],input[j+1]] = [input[j+1],input[j]];
      }
    }
  }
  return input;
}

console.time('check time');
console.log(BubbleSort([1,5,6,3,7,4,36,8]));
console.timeEnd('check time');


console.log(BubbleSort([1,5,3]));