// Create an Animal class
// Every animal has a hunger and a thirst value
// When creating a new animal object, these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal{
    constructor(hunger = 50, thrist = 50){
        this.hunger = hunger;
        this.thirst = thrist;
    }
    eat(){
        this.hunger--;
    }
    drink(){
        this.thirst--;
    }
    play(){
        this.hunger++;
        this.thirst++;
    }
}

module.exports = Animal;