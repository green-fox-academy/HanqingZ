'use strict';

// An attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codeHourPerDay = 6;
let workingWeeks = 17;

console.log("Hours spent with coding in a semester " + (codeHourPerDay * workingWeeks * 5) + " hours");

console.log("Percentage of the coding hours in the semester " + ((5*6)/52 * 100).toFixed(2) + "%");