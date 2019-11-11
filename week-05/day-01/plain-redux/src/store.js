import { createStore, combineReducers } from 'redux';

import { counter } from './counter/reducers';
import { tags } from './tag/reducers';

export default createStore(
  combineReducers({
    counter,
    tags,
  })
);