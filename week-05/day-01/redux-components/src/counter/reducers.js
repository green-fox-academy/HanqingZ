//import redux from 'redux';
import { SET, INCREASE, DECREASE, RESET } from './actions';

export const counter = (state = 0, action) => {
  switch(action.type){
    case SET:
      return state = action.amount;
    case INCREASE:
      return state + action.amount;
    case DECREASE:
      return state - action.amount;
    case RESET:
      return state = 0;
    default:
      return state;
  }
}