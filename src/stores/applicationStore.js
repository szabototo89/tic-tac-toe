import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers/appReducer';
import thunk from 'redux-thunk';
import defaultState from '../initialState';
import logger from 'redux-logger';

import { getCurrentPlayer } from '../reducers/game/reducer';
import { stepGameAsComputer } from '../reducers/game/actions';
import { getGame } from '../reducers/appReducer';

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


function initializeStore() {
  const store = createStore(
    appReducer, 
    getInitialState(defaultState),
    applyMiddleware(thunk, logger, localDatabaseMiddleware),
  );

  if (getCurrentPlayer(getGame(store.getState())) === 1) {
    store.dispatch(stepGameAsComputer());
  }

  return store;
}

export default initializeStore();