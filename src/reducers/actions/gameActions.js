import { NEW_GAME } from './gameActionTypes';

export const startNewGame = (size) => {
  return {
    type: NEW_GAME,
    payload: {
      size
    }
  };
}