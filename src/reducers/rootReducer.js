import { combineReducers, compose } from 'redux';
import gameReducer, { getGameFields as _getGameFields } from './gameReducer';

export default combineReducers({
  game: gameReducer
});

export const getGame = (state) => state.game;
export const getGameFields = compose(_getGameFields, getGame);