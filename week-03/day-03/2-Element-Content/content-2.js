var newList = ['apple', 'banana', 'cat', 'dog'];

var oldList = document.querySelectorAll('li');

oldList.forEach((e,m) => {
  e.innerHTML = newList[m];
})