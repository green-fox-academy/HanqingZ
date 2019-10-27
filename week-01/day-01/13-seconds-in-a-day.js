'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var currentTime = 14*60*60 + 34*60 + 42;
var totalSecondPerDay = 24*60*60;

console.log("Remain of the day is " + (totalSecondPerDay - currentTime) + " seconds.");