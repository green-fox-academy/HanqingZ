'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

const joins = [];

function makingMatches(girls, boys){
  while(girls.length !== 0 && boys.length !== 0){
    //console.log(joins);
    if(girls.length == 0){
      joins.push(boys.shift());
      continue;
    }
    else if(boys.length == 0){
      joins.push(girls.shift());
      continue;
    }
    joins.push(girls.shift());
    joins.push(boys.shift());
    console.log(joins);
  }
  return joins;
}

console.log(girls.length == 0);

console.log(makingMatches(girls, boys));

//module.exports = makingMatches;