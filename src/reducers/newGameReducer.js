import { TOGGLE_NEW_GAME_WINDOW, CHANGE_PLAYER_NAME } from './actions/newGameActionTypes';
import { NEW_GAME } from './actions/gameActionTypes';
import { update } from '../utils/arrays';

const initialState = {
  players: [],
  isVisible: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER_NAME:
      const { index, playerName } = action.payload;
      return {
        ...state,
        //players: update(state.players)(index, playerName)
        players: [ playerName, 'Computer' ]
      };
    case TOGGLE_NEW_GAME_WINDOW:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case NEW_GAME:
      return {
        ...state,
        isVisible: false,
        players: []
      };
  }

  return state;
}

export const isNewGameVisible = ({ isVisible }) => isVisible;
export const getPlayerNames = ({ players }) => [ ...players ];
export const getPlayerName = ({ players }) => players[0];

export default reducer;