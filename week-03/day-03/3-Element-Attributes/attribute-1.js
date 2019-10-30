var greenFox = document.querySelector('img');
console.log('The green Fox url is ' + greenFox.getAttribute('src'));
greenFox.setAttribute('src', "https://s.abcnews.com/images/Lifestyle/ht_pudding_the_fox_04_mt_140821_4x3_992.jpg");

var links = document.querySelector('a');
links.setAttribute('href', "https://www.greenfoxacademy.com/en/home");

var button2 = document.querySelector('.this-one');
button2.disabled = true;
button2.innerHTML = "Don't click me!";