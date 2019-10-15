'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var str = '*';
var space = ' ';

for(var i = 1; i <= lineCount; i++){
    console.log(space.repeat(lineCount - i) + str.repeat(i*2-1));
}