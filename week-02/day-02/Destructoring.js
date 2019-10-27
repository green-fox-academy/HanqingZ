'use strict'

var car = {
  model: 'Benz',
  color: 'black',
  year: 1886,
  doors: 0,
  historical: true,
};

var computer = {
  type: 'PC',
  monitor: {
    color: 'black',
    size: '16\"',
    HDMI: true,
    VGA: true,
  },
  tower: {
    color: 'grey',
    CPU: 4.7,
    memory: 16,
    SSD: 128,
  },
};

// before ES6
function carES5 (carES5){
  var model = carES5.model;
  var color = carES5.color;
  var year = carES5.year;
  var doors = carES5.doors;
  var historical = carES5.historical;
  console.log(model, color, year, doors, historical);
}
carES5(car);

//from ES6
let carES6 = (carES6) => { const { model, color, year, doors, historical } = carES6;
console.log(model, color, year, doors, historical);
}
carES6(car);



// before ES6
function computerES5 (computerES5){
  var type = computerES5.type;
  var monitorColor = computerES5.monitor.color;
  var monitorSize = computerES5.monitor.size;
  var monitorHDMI = computerES5.monitor.HDMI;
  var monitorVGA = computerES5.monitor.VGA;
  var towerColor = computerES5.tower.color;
  var towerCPU = computerES5.tower.CPU;
  var towerMemory = computerES5.tower.memory;  
  var towerSSD = computerES5.tower.SSD;
  console.log(type, monitorColor, monitorSize, monitorHDMI, monitorVGA, towerColor, towerCPU, towerMemory, towerSSD);
}
computerES5(computer);

//from ES6
let computerES6 = (computerES6) => { const { type, monitor: { color : monitorColor, size, HDMI, VGA }, tower : { color : towerColor, CPU, memory, SSD } } = computerES6;
console.log(type, monitorColor, size, HDMI, VGA, towerColor, CPU, memory, SSD);
}
computerES6(computer);