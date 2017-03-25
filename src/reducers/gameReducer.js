import { NEW_GAME, SELECT_GAME_FIELD } from './actions/gameActionTypes'
import { getPlayerSymbol } from './playersReducer';
import { flatten, update } from '../utils/arrays';
import { hasGameWinner } from './winnerReducer';

const makeEmptyGameTable = (size) => Array(size).fill(Array(size).fill(null));

const reducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_GAME: {
      const { size, players } = action.payload;

      return {
        ...state,
        currentPlayer: 0,
        players: players.map(player => player.id),
        fields: makeEmptyGameTable(size)
                  .map((row, x) => row.map((cell, y) => ({
                    x, y, owner: null
                  })))
      };
    }

    case SELECT_GAME_FIELD: {
      const { owner, x, y } = action.payload.field;
      const { currentPlayer, players, fields } = state;

      if (isGameOver(state)) {
        return {
          ...state,
          isGameOver: true
        };
      }

      const nextPlayer = (currentPlayer + 1) % players.length;
      const nextFields = update(fields)(x, (row) => 
        update(row)(y, (previousValue) => ({
          ...previousValue,
          owner: currentPlayer
        }))
      );

      return {
        ...state,
        currentPlayer: nextPlayer,
        fields: nextFields
      };
    }
  }

  return state;
};

const makeGameField = (field) => ({
  ...field,
  ownerSymbol: getPlayerSymbol(getGameFieldOwner(field))
});

export const getGameFields = ({ fields = [] } = {}) => flatten(fields).map(makeGameField);

export const getGameField = (state, x, y) => {
  const field = state && state.fields[x][y];
  return makeGameField(field);
};

const getGameFieldOwner = ({ owner } = {}) => owner;

export const isGameOver = (state) => hasGameWinner(state) || 
                                     getGameFields(state)
                                        .every(field => getGameFieldOwner(field) !== null);

export default reducer;