import { STEP_GAME } from './actions';
import { START_NEW_GAME } from '../newGameDialog/actions';
import selector from '../../utils/selector';
import { update } from '../../utils/arrays';

const hasWinner = (fields, currentPlayer, position) => {
  const tableSize = Math.sqrt(fields.length);

  const x = Math.floor(position / tableSize);
  const y = position % tableSize;
  const getField = (x, y) => fields[y * tableSize + x].owner;

  const count = {
    row: 0,
    column: 0,
    diagonal: 0,
    reversedDiagonal: 0
  };

  for (let i = 0; i < tableSize; i++) {
    if (getField(x, i) === currentPlayer) count.column++;
    if (getField(i, y) === currentPlayer) count.row++;
    if (getField(i, i) === currentPlayer) count.diagonal++;
    if (getField(i, tableSize - i - 1) === currentPlayer) count.reversedDiagonal++;
  }

  const result = Object.values(count).some(result => result === tableSize);
  console.info(result);
  return result;
};

const initialState = {
  players: ['Player 1', 'Computer']
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_GAME: {
      const { playerName } = action.payload;

      return {
        ...state,
        currentPlayer: 0,
        fields: Array(3 * 3).fill(null).map(() => ({
          owner: null
        })),
        players: [ playerName, 'Computer' ]
      };
    }

    case STEP_GAME: {
      const currentPlayer = getCurrentPlayer(state);
      const players = getPlayers(state);
      const fields = getFields(state);

      const { position } = action.payload;

      if (fields[position].owner !== null) {
        return state;
      }

      const nextFields = [
        ...fields.slice(0,  position),
        {
          owner: currentPlayer
        },
        ...fields.slice(position + 1)
      ];

      return {
        ...state,
        currentPlayer: (currentPlayer + 1) % players.length,
        winner: hasWinner(nextFields, currentPlayer, position) ? currentPlayer : null,
        fields: nextFields
      };
    }
  }

  return state;
};

export const getPlayers = selector('players');
export const getFields = selector('fields');
export const getCurrentPlayer = selector('currentPlayer');

export default reducer;