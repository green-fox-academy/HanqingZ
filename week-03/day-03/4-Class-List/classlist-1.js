var pValue = document.querySelectorAll('p');

pValue[3].className == "dolphin" ? pValue[0].textContent = 'pear' : null;

pValue[0].className == "apple" ? pValue[2].textContent = 'dog' : null;

pValue[0].classList.add("red");

pValue[1].classList.replace("balloon", "pear");