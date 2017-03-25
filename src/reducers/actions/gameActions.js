import { NEW_GAME, SELECT_GAME_FIELD, CHECK_GAME_OVER } from './gameActionTypes';
import randomStep from '../../services/randomStep';
import { getGameFields } from '../../reducers/rootReducer';

const symbols = ['X', 'O'];

export const startNewGame = (size, players = []) => ({
  type: NEW_GAME,
  payload: {
    size,
    players: players.map((player, index) => ({
      id: index,
      name: player,
      symbol: symbols[index]
    }))
  }
});

export const selectGameField = (field) => ({
  type: SELECT_GAME_FIELD,
  payload: {
    field
  }
});

export const checkGameOver = () => ({
  type: CHECK_GAME_OVER
});

export const stepGame = (field) => (dispatch, getState) => {
  const isEmptyField = (field) => field && field.owner === null;
  const state = getState();

  if (!isEmptyField(field)) return;

  dispatch(selectGameField(field));
  const nextState = getState();
  const enemySelectedField = randomStep(isEmptyField)(getGameFields(nextState));
  enemySelectedField && dispatch(selectGameField(enemySelectedField));
};