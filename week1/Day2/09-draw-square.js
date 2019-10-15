  
'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

var str = '%';
var space = ' ';

for(var i = 1; i <= lineCount; i++){
    if(i === 1 || i == lineCount){
        console.log(str.repeat(lineCount));
    }
    else{
        console.log(str + space.repeat(lineCount - 2) + str);
    }
}