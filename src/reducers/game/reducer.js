import { STEP_GAME } from './actions';
import { START_NEW_GAME } from '../newGameDialog/actions';
import selector from '../../utils/selector';
import { flatten } from '../../utils/arrays';

export const getPlayers = selector('players');
export const getPlayer = (state, id) => getPlayers(state)[id];
export const getFields = selector('fields');
export const getCurrentPlayer = selector('currentPlayer');
export const getWinner = selector('winner');
export const getWinnerFields = selector('winnerFields');
export const hasWinner = (state) => getWinner(state) !== null;

export const isTie = (state) => getWinner(state) === 'tie';

const calculateWinner = (state, nextFields, currentPlayer, position) => {
  const tableSize = (fields) => Math.sqrt(fields.length);
  const calculateWinnerFields = (fields, currentPlayer, position) => {
    const countable = ({ count = 0, fields = [] } = {}) => ({ count, fields });

    const x = Math.floor(position / tableSize(fields));
    const y = position % tableSize(fields);
    const getField = (x, y) => fields[x * tableSize(fields) + y].owner;

    let row = countable(),
        column = countable(),
        diagonal = countable(),
        reversedDiagonal = countable();

    for (let i = 0; i < tableSize(fields); i++) {
      if (getField(x, i) === currentPlayer) {
        column = countable({
          count: column.count + 1,
          fields: [ ...column.fields, { x, y: i } ]
        });
      }

      if (getField(i, y) === currentPlayer) {
        row = countable({
          count: row.count + 1,
          fields: [ ...row.fields, { x: i, y }]
        });
      }

      if (getField(i, i) === currentPlayer) {
        diagonal = countable({
          count: diagonal.count + 1,
          fields: [ ...diagonal.fields, { x: i, y: i } ]
        });
      }

      if (getField(i, tableSize(fields) - i - 1) === currentPlayer) {
        reversedDiagonal = countable({
          count: reversedDiagonal.count + 1,
          fields: [ ...reversedDiagonal.fields, { x: i, y: tableSize(fields) - i - 1 } ]
        });
      };
    }

    return flatten([ row, column, diagonal, reversedDiagonal ]
        .filter(countable => countable.count === tableSize(fields))
        .map(countable => countable.fields));
  };

  const winnerFields = calculateWinnerFields(nextFields, currentPlayer, position);
  const hasWinner = winnerFields.length !== 0;

  const isGameTableFull = (fields) => {
    return !fields.some(field => field && field.owner === null);
  };

  if (hasWinner) {
    return {
      winner: getPlayer(state, currentPlayer),
      winnerFields: winnerFields.map(({ x, y }) => x * tableSize(nextFields) + y)
    };
  }

  if (isGameTableFull(nextFields)) {
    return {
      winner: 'tie',
      winnerFields: []
    };
  }

  return {
    winner: null,
    winnerFields: []
  };
}

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
        winner: null,
        winnerFields: [],
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

      const { winner, winnerFields } = calculateWinner(state, nextFields, currentPlayer, position);

      return {
        ...state,
        currentPlayer: (currentPlayer + 1) % players.length,
        winnerFields,
        winner,
        fields: nextFields
      };
    }

    default:
      return state;
  }
};

export default reducer;