"use strict"

var ul = document.querySelector('.asteroids');
ul.removeChild(document.querySelector('li'));

const planetData = [
  { category: 'inhabited', content: 'Foxes', asteroid: true },
  { category: 'inhabited', content: 'Whales and Rabbits', asteroid: true },
  { category: 'uninhabited', content: 'Baobabs and Roses', asteroid: true },
  { category: 'inhabited', content: 'Giant monsters', asteroid: false },
  { category: 'inhabited', content: 'Sheep', asteroid: true }
];


planetData.forEach(e => {
  if(e.asteroid == true){
    let item = document.createElement('li');
    item.className = e.category;
    item.textContent = e.content;
    ul.append(item);
  }
})