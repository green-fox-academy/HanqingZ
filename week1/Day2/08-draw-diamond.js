'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var space = ' ';
var str = '*';

for(var i = 1; i <= (lineCount/2+1); i++){
    console.log(space.repeat(lineCount - i) + str.repeat(i*2-1));
}
for(var i = (lineCount/2-1).toFixed(0); i >=1; i--){
    console.log(space.repeat(lineCount - i) + str.repeat(i*2-1));
}