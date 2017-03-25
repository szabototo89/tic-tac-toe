import { CHANGE_PLAYER_NAME, TOGGLE_NEW_GAME_WINDOW } from './newGameActionTypes';

export const changePlayerName = (playerName) => {
  return {
    type: CHANGE_PLAYER_NAME,
    payload: { playerName }
  };
};

export const toggleNewGameWindow = () => {
  return {
    type: TOGGLE_NEW_GAME_WINDOW
  };
};