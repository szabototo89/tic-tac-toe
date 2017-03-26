import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers/appReducer';
import thunk from 'redux-thunk';
import defaultState from '../initialState';
import logger from 'redux-logger';

const getInitialState = (defaultState) => {
  const state = JSON.parse(localStorage.getItem('tic-tac-toe.state'));

  return {
    ...defaultState,
    ...state
  };
};

const localDatabaseMiddleware = (store) => (next) => (action) => {
  next(action);
  const state = store.getState();
  localStorage && localStorage.setItem('tic-tac-toe.state', JSON.stringify(state));
}

export default createStore(
  appReducer, 
  getInitialState(defaultState),
  applyMiddleware(thunk, logger, localDatabaseMiddleware),
);