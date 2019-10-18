'use strict'

const Animal = require('./03-Animal');

class Farm {
    constructor(slots = 10) {
        this.animalList = [];
        this.slots = slots > 0 ? slots : 0;
    }

    addAnimal(hunger = 50, thrist = 50){
        let animal = new Animal(hunger, thrist);
        this.animalList.push(animal);
    }

    breed(){
        if(this.slots > 0){
            let animal = new Animal();
            this.animalList.push(animal);
            this.slots--;
        }
        else{
            console.log('We don\'t have space.');
        }
    }

    slaughter(){
        this.animalList.filter(animal => Math.min(animal.hunger));
    }
}

let farm = new Farm();
farm.addAnimal(100,100);
farm.addAnimal();
farm.addAnimal(10,10);
console.log(farm);

farm.breed();
console.log(farm);

farm.slaughter();
console.log(farm);
