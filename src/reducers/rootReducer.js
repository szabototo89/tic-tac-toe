import { combineReducers, compose } from 'redux';
import gameReducer, { getGameFields as _getGameFields, isGameOver as _isGameOver } from './gameReducer';
import playersReducer, { getPlayerNames as _getPlayerNames, getPlayerSymbol as _getPlayerSymbol } from './playersReducer';
import winnerReducer from './winnerReducer';

import newGameReducer, { 
  getPlayerNames as _getPlayerName, 
  isNewGameVisible as _isNewGameVisible 
} from './newGameReducer';

const composeReducers = (...reducers) => (state, action) => {
  return reducers.map(reducer => (state) => reducer(state, action))
                 .reduce((previousValue, reducer) => reducer(previousValue), state);
};

export default combineReducers({
  game: composeReducers(gameReducer, winnerReducer),
  players: playersReducer,
  newGame: newGameReducer
});

export const getGame = (state) => state.game;
export const getGameFields = compose(_getGameFields, getGame); 
export const isGameOver = compose(_isGameOver, getGame);

const getPlayers = (state) => state.players;
export const getPlayerNames = compose(_getPlayerNames, getPlayers);
export const getPlayerSymbol = compose(_getPlayerSymbol, getPlayers);

const getNewGame = (state) => state.newGame;
export const getPlayerName = compose(_getPlayerName, getNewGame);
export const isNewGameVisible = compose(_isNewGameVisible, getNewGame);