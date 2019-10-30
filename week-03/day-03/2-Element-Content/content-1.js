//part 1
/*
var content = document.querySelector('.animals');

var listOfContent = document.querySelectorAll('p');
listOfContent.forEach(e => {
  e.innerHTML = content.innerText;
})
*/

//part2
var content = document.querySelector('.animals').innerHTML;

var listOfContent = document.querySelectorAll('p');

listOfContent.forEach(e => {
  e.innerHTML = content;
})