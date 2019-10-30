var king = document.querySelector('#b325');
console.log('The King', king);

var businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e =>{
  console.log(e);
})

var conceitedKing = document.querySelectorAll('.container');
conceitedKing.forEach(e =>{
  alert(e.textContent);
})

var noBusiness = document.querySelectorAll('div.asteroid');
noBusiness.forEach(e =>{
  console.log(e);
})