//import redux from 'redux';
import { ADD_TAG, REMOVE_TAG, REMOVE_TAGS } from './actions';

export const tags = (state = ['blue', 'bold', 'hipster'], action) => {
  switch(action.type){
    case ADD_TAG:
      if(state.indexOf(action.tagType) < 0){
        return state = [...state, action.tagType];
      }
      return state;
    case REMOVE_TAG:
      return state = state.filter(element=>element !== action.tagType);
    case REMOVE_TAGS:
      return state = [];
    default:
      return state;
  }
}
