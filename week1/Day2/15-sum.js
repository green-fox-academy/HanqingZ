'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

var num = 0;

function sum(n){
    for(let i = 0; i <= n; i++){
        num += i;
    }
}

sum(5);
console.log(num);