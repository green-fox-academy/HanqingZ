'use strict'

const Garden = require('./GardenES5.js');

function Playground (width, length){
  Garden.call(this, width, length);
  this.toys = [];
}

Playground.prototype = Object.create(Garden.prototype);
Playground.prototype.constructor = Playground;
Playground.prototype.add= function(toy) {
  this.toys.push(toy);
}

let playground = new Playground(5, 4);
console.log(playground.efficiency());
let toy = 'SD doll';
playground.add(toy);
console.log(playground);