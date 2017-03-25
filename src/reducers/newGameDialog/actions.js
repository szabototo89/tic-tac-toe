export const TOGGLE_NEW_GAME_DIALOG = 'TOGGLE_NEW_GAME_DIALOG';
export const CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME';
export const START_NEW_GAME = 'START_NEW_GAME';

export const toggleNewGameDialog = () => {
  return {
    type: TOGGLE_NEW_GAME_DIALOG
  };
};

export const changePlayerName = (playerName) => {
  return {
    type: CHANGE_PLAYER_NAME,
    payload: playerName
  };
};

export const startNewGame = (playerName) => {
  return {
    type: START_NEW_GAME,
    payload: { playerName }
  };
};