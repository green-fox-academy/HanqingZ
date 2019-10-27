var alphaMap = new Map();

console.log(alphaMap.size == 0);

alphaMap.set(97, 'a');
alphaMap.set(98, 'b');
alphaMap.set(99, 'c');
alphaMap.set(65, 'A');
alphaMap.set(66, 'B');
alphaMap.set(67, 'C');

/*
alphaMap.forEach(function(value, key){
    console.log(`${key} : ${value}`);
})*/

console.log(alphaMap.keys());
console.log(alphaMap.values());

alphaMap.set(68, 'D');

console.log(alphaMap.size);

console.log(alphaMap.get(99));

alphaMap.delete(97);
alphaMap.forEach(function(value, key){
    console.log(`${key} : ${value}`);
})

console.log('This map has 100? ' + (alphaMap.has(100)));

alphaMap.clear();
console.log('This map is empty? ' + (alphaMap.size == 0));