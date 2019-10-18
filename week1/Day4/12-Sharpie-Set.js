'use strict'

const Sharpie = require ('./04-Sharpie');

class SharpieSet {
    constructor(){
        this.sharpies = [];
    }

    addSharpie(color, width, inkAmount){
        let sharpie = new Sharpie(color, width, inkAmount);
        this.sharpies.push(sharpie);
    }

    countUsable(){
        let count = 0;
        for(let i of this.sharpies){
            if(i.inkAmount > 0){
                count++;
            }
        }
        return count;
    }

    removeTrash(){
        for(let j of this.sharpies){
            if(j.inkAmount <= 0){
                delete this.sharpies[this.sharpies.indexOf(j)];
            }
        }
    }
}

let sharpieSet = new SharpieSet();
sharpieSet.addSharpie('black', 10, 2);
sharpieSet.addSharpie('blue', 10, 4);
sharpieSet.addSharpie('red', 6, 0);

console.log(sharpieSet.countUsable());
sharpieSet.removeTrash();
console.log(sharpieSet);