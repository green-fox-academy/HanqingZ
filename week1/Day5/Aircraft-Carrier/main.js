const Aircraft = require('./Aircrafts');
const Carrier = require('./Carrier');

let aircraft1 = new Aircraft.F35();
let aircraft2 = new Aircraft.F35();
let aircraft3 = new Aircraft.F16();
let aircraft4 = new Aircraft.F16();
let aircraft5 = new Aircraft.F16();

let carrier = new Carrier(2300, 5000);
carrier.add(aircraft1);
carrier.add(aircraft2);
carrier.add(aircraft3);
carrier.add(aircraft4);
carrier.add(aircraft5);

carrier.getStatus();

carrier.fight(5000);
carrier.getStatus();