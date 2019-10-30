'use strict'

var foodList = ['bread', 'milk', 'orange', 'tomato'];
var buttonList = ['up', 'down', 'add', 'remove'];

var body = document.querySelector('body');
body.setAttribute('style', 'display:flex; flex-direction:row; justify-content:center; align-item: center; flex-wrap:wrap;');

//  LEFT SIDE TABLE
var ull = document.createElement('table');
ull.classList.add("leftSquare");
body.appendChild(ull);

for(let i = 0; i < foodList.length; i++) {
  let li = document.createElement('tr');
  li.textContent = foodList[i];
  li.setAttribute('onClick', 'getFocus(this)');
  li.setAttribute('style', 'cursor: pointer');
  ull.appendChild(li);
}
ull.setAttribute('style', 
  'display: flex; flex-direction: column; justify-content: center; border: 1px solid black; width:80px;');

//  MIDDLE BUTTON SECTION
var section = document.createElement('section');
section.classList.add('button');
section.setAttribute('style', 'display:flex; flex-direction:column; margin:5px;');
for(let i = 0; i < 4; i++){
  var button = document.createElement('button');
  button.textContent = buttonList[i];
  section.appendChild(button);
}
body.appendChild(section);

//  RIGHT SIDE TABLE
var ulr = document.createElement('table');
ulr.classList.add("rightSquare");
for(let i = 0; i < foodList.length; i++){
  let li = document.createElement('tr');
  li.setAttribute('onClick', 'getFocus(this)');
  li.setAttribute('style', 'cursor: pointer');
  ulr.appendChild(li);
}
ulr.setAttribute('style', 
  'display: flex; flex-direction: column; justify-content: center; border: 1px solid black; width: 80px;');
body.appendChild(ulr);

//===================================================

//UP
