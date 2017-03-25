import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers/appReducer';
import thunk from 'redux-thunk';
import initialState from '../initialState';
import logger from 'redux-logger';

export default createStore(
  appReducer, 
  initialState,
  applyMiddleware(thunk, logger),
);