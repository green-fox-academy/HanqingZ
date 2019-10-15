'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(n){
    for(let i = n - 1; i > 0; i--){
        n *= i;
    }
    return n;
}

console.log(factorio(5));