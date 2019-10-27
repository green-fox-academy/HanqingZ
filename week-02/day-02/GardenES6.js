'use strict'

class Garden {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
      return this.width * this.length;
  }

  circumference() {
      return (this.width + this.length) * 2;
  }

  efficiency() {
      return this.area()/this.circumference();
  }
}

let garden = new Garden(3, 4);
console.log(garden.efficiency());

//module.exports = Garden;