import { FETCHSTART, FETCHSUCCESS, FETCHERROR } from './actionCreator';

const initialState = {
  dataList: [],
  message: ''
};

export default (state = initialState, action) => {
  switch(action.type){
    case FETCHSTART:
      return { ...state, message: 'loading' };
    case FETCHSUCCESS:
      return { dataList: action.payload, message: 'success' }
    case FETCHERROR:
      return { ...state, message: action.payload };
    // case SENDING:
    //   return 
    default:
      return state;
  }
}