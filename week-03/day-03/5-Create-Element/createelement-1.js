'use strict'

var asteroidList = document.querySelector('ul.asteroids');

var newItem = document.createElement('li');
newItem.classList.add("asteroid");
newItem.textContent = "The Green Fox";
asteroidList.appendChild(newItem);

var newItem2 = document.createElement('li');
newItem2.classList.add("asteroid");
newItem2.textContent = "The Lamplighter";
asteroidList.appendChild(newItem2);

var header = document.createElement("header");
asteroidList.insertAdjacentElement("beforebegin", header);

var divs = document.querySelector(".container");
var image = document.createElement("img");
image.src="http://greenfoxstudio.com.au/wp-content/uploads/2018/11/GFSLogo-IconOnly_COL.png";

divs.appendChild(image);