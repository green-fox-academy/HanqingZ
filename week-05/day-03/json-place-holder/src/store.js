import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getJson } from './component/reducer';

export default createStore (getJson, applyMiddleware(thunk));