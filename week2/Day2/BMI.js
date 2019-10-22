'use strict'

let detail = {
  'mass': 90,
  'height': 1.70
}

function bmiCalculate(detail) {
  let bmiValue = detail.mass/(detail.height**2);
  detail['BMI'] = bmiValue;
  return detail;
}

console.log(bmiCalculate(detail));