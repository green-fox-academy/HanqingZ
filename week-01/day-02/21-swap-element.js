'use strict';

// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// - Swap the first and the third element of `abc`

var abc = ['Arthur', 'Boe', 'Chloe'];

function swap(arr){
    var temp = arr[0];
    arr[0] = arr[2];
    arr[2] = temp;
}

swap(abc);
console.log(abc);