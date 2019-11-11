export const SET = 'set';
export const INCREASE = 'increase';
export const DECREASE = 'decrease';
export const RESET = 'reset';

export function setCounter(value = 0) {
  return{
    type: SET,
    amount: value
  }
}

export function increaseByValue(value) {
  return{
    type: INCREASE,
    amount: value,
  }
}

export function decreaseByValue(value){
  return{
    type: DECREASE,
    amount: value,
  }
}

export function resetCounter() {
  return{
    type: RESET
  }
}
