'use strict'

function carWrapperES5(model, color, year, doors, specPropName, specPropValue) {
  // the function should create and return an object with assigning the model,
  // color year and doors to properties with the same name as the variable and
  // it should assign to the specPropName named property the specPropValue

  var carwrap = {
    model: model,
    color: color,
    year: year,
    doors: doors,
  }
  carwrap[specPropName] = specPropValue;

  return carwrap;
}

function carWrapperES6(model, color, year, doors, specPropName, specPropValue) {
  // the function should create and return an object with assigning the model,
  // color year and doors to properties with the same name as the variable and
  // it should assign to the specPropName named property the specPropValue

  const carwrap = {
    model: model,
    color: color,
    year: year,
    doors: doors,
    [specPropName]: specPropValue,
  }
  return carwrap;
}

console.log(JSON.stringify(carWrapperES5('Benz', 'black', 1886, 0, 'historical', true)));
console.log(JSON.stringify(carWrapperES6('Benz', 'black', 1886, 0, 'historical', true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}