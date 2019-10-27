'use strict';

const Thing = require('./07-thing');
const Fleet = require('./07-fleet');

//const fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Create a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well

class FleetOfThings {
    constructor(){
        this.fleet = new Fleet();
    }

    addThingToFleet(addThing, complete = false){
        let thing = new Thing(addThing);
        if(complete == true){
            thing.complete();
        }
        this.fleet.add(thing);
    }

    setComplete(name, complete){
        this.fleet.things.map(e =>{
            if(e.name == name){
                e.completed = complete;
            }
        })
    }

    print(){
        this.fleet.things.forEach(e=>{
            console.log(parseInt((this.fleet.things.indexOf(e)) + 1) + '. [' + this.checkmark(e) + '] ' + e.getName());
        })
    }

    checkmark(e){
        if(e.getCompleted()){
            return 'x'
        }
        else{
            return ' '
        }
    }

}

let fot = new FleetOfThings();
fot.addThingToFleet('Get milk');
fot.addThingToFleet('Remove the obstacles');
fot.addThingToFleet('Stand up');
fot.addThingToFleet('Eat lunch', true);
fot.setComplete('Stand up', true);
fot.print();