const Plant = require('./Plant');
const Garden = require('./Garden');

let flower1 = new Plant.Flower('yellow');
let flower2 = new Plant.Flower('blue');
let tree1 = new Plant.Tree('purple');
let tree2 = new Plant.Tree('orange');

let garden = new Garden();

garden.addFlower(flower1);
garden.addFlower(flower2);
garden.addTree(tree1);
garden.addTree(tree2)

//console.log(flower1);
garden.flowers.forEach(e=> {e.print()});
garden.trees.forEach(e => {e.print()})

garden.watering(40);
garden.watering(70);
