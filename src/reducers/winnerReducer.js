import { SELECT_GAME_FIELD } from './actions/gameActionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_GAME_FIELD:
      const { currentPlayer, fields } = state;
      const { x, y } = action.payload.field;

      return {
        ...state, 
        winner: hasWinner(fields, x, y, currentPlayer) 
                    ? currentPlayer
                    : null
      };
  }
  
  return state;
};

const getPlayers = (state) => state && state.players;

const hasWinner = (fields, x, y, currentPlayer) => {
  const get = (x, y) => {
    const currentField = fields[x][y];
    return currentField && currentField.owner;
  };

  let count = {
    column: 0,
    row: 0,
    diagonal: 0,
    reversedDiagonal: 0
  };

  for (let i = 0; i < fields.length; i++) {
    if (get(x, i) === currentPlayer) count.column++;
    if (get(i, y) === currentPlayer) count.row++;
    if (get(i, i) === currentPlayer) count.diagonal++;
    if (get(i, fields.length - i) === currentPlayer) count.reversedDiagonal++;
  }

  console.info(count);
  return Object.values(count).some(count => count === fields.length);
};

export const hasGameWinner = (state) => !!state.winner;

export default reducer;