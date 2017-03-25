import { combineReducers } from 'redux';
import newGameDialogReducer from './newGameDialog/reducer';
import gameReducer from './game/reducer';
import selector from '../utils/selector';

export default combineReducers({
  game: gameReducer,
  newGameDialog: newGameDialogReducer,
});

export const getNewGameDialog = selector('newGameDialog');
export const getGame = selector('game');