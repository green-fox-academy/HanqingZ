'use strict'

import { Printable } from './Printable';

//get code from previous Dominos exercise
class Domino implements Printable {
  protected values: number[];

  constructor(valueA, valueB) {
    this.values = [valueA, valueB];
  }

  toString() {
    return `[${this.values[0]}|${this.values[1]}]`;
  }

  //implemented from the interface Printable
  printAllFields() {
    console.log(`This domino has ${this.values[0]} and ${this.values[1]}`);
  }
}

//create new Dominos and Domino list
function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();


//test the implemented function
for (let domino of dominoes) {
  domino.printAllFields();
}