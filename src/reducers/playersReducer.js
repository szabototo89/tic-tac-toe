import { NEW_GAME } from '../reducers/actions/gameActionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_GAME:
      const { players } = action.payload;
      return {
        ...state,
        ...players
      };
  }

  return state;
};

export const getPlayer = (state, id) => state && state[id];
export const getPlayerName = (state, id) => getPlayer(state, id).name;
export const getPlayerSymbol = (state, id) => {
  const player = getPlayer(state, id);
  if (!player) return null;
  return player.symbol;
}
export const getPlayerNames = (state) => Object.values(state);

export default reducer;