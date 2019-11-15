import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chatMessage from './Chat/reducer';

export default createStore( chatMessage, applyMiddleware(thunk));