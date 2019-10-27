'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let timeOutPrint = (words, timeSet) => {
    setTimeout(() =>{
        console.log(words);
    },timeSet)
}

let run = (callback) => {
    timeOutPrint('apple', 0);
    timeOutPrint('pear', 1000);
    timeOutPrint('melon', 3000);
    timeOutPrint('grapes', 5000);
}

run();