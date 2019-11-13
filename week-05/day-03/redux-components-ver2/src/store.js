import { createStore, combineReducers, applyMiddleware } from 'redux';

import { counter } from './counter/reducers';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({
    counter,
  }),
  applyMiddleware(thunk)
);