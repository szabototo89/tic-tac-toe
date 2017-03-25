import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import initialState from '../initialState';
import logger from 'redux-logger';

export default createStore(
  rootReducer, 
  initialState,
  applyMiddleware(thunk, logger),
);