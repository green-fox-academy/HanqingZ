'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
// Surface Area: 600
// Volume: 1000

var length = 3.0, height = 4.0, weight = 5.0;

var sur = (length * weight + weight * height + length * height) * 2;
var vol = length * weight * height;

console.log("Surface Area: " + sur);
console.log("Volume: " + vol);