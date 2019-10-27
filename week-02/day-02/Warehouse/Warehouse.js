'use strict'

const Item = require('./Item');
const Toy = require('./Toy');
const Tool = require('./Tool');

class Warehouse {
  constructor() {
    this.itemList = [];
  }

  addItem(item) {
    this.itemList.push(item);
  }

  printItemsOfType(type) {
    for(let c of this.itemList){
      if (c instanceof type) {
        c.print();
      }
    }
  }
}


const wh = new Warehouse();

wh.addItem(new Item('vase', 30));
wh.addItem(new Toy('pebble', undefined, 'grey'));
wh.addItem(new Toy('car', 10, 'blue'));
wh.addItem(new Tool('hammer', 25));

wh.printItemsOfType(Item);
wh.printItemsOfType(Toy);
wh.printItemsOfType(Tool);