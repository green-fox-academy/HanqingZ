const Aircraft = require('./Aircrafts');
const Carrier = require('./Carrier');


let carrier = new Carrier(2300, 5000);
for(let i = 0; i < 2; i++){
    let aircraft = new Aircraft.F35();
    carrier.add(aircraft);
}
for(let i = 0; i < 3; i++){
    let aircraft = new Aircraft.F16();
    carrier.add(aircraft);
}

let carrier2 = new Carrier(230, 1000);
for(let i = 0; i < 1; i++){
    let aircraft = new Aircraft.F35();
    carrier2.add(aircraft);
}
for(let i = 0; i < 3; i++){
    let aircraft = new Aircraft.F16();
    carrier2.add(aircraft);
}

carrier.getStatus();
carrier2.getStatus();
console.log('======================');

carrier.fight(5000);
carrier.getStatus();