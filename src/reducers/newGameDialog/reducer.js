import { TOGGLE_NEW_GAME_DIALOG, CHANGE_PLAYER_NAME, START_NEW_GAME } from './actions';
import selector from '../../utils/selector';

const initialState = {
  isVisible: false,
  playerName: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NEW_GAME_DIALOG:
      return {
        ...state,
        isVisible: !state.isVisible
      };

    case CHANGE_PLAYER_NAME: {
      const playerName = action.payload;

      return {
        ...state,
        playerName
      };
    }

    case START_NEW_GAME: {
      return {
        ...state,
        isVisible: false
      };
    }

    default:
      return state;
  }
};

export const isNewGameDialogVisible = selector('isVisible'); 
export const getPlayerName = selector('playerName');

export default reducer;