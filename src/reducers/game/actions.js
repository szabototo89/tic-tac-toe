import randomStep from '../../services/randomStep';
import { getGame } from '../appReducer';
import { getFields, getCurrentPlayer, hasWinner } from '../game/reducer';

export const STEP_GAME = 'STEP_GAME';

export const stepGame = (position, currentPlayer) => {
  return {
    type: STEP_GAME,
    payload: { position, currentPlayer }
  };
};

export const stepGameAsComputer = () => async (dispatch, getState) => {
  const nextState     = getState(),
        nextGame      = getGame(nextState),
        nextFields    = getFields(nextGame),
        nextPlayer    = getCurrentPlayer(nextGame),
        hasGameWinner = hasWinner(nextGame);

  if (hasGameWinner) return Promise.resolve();

  const computerPosition = randomStep(nextFields);
  computerPosition !== null && dispatch(stepGame(computerPosition, nextPlayer));
}

const delay = (duration) => new Promise(resolve => {
  setTimeout(resolve, duration);
});

export const nextRound = (position, player) => async (dispatch, getState) => {
  if (getCurrentPlayer(getGame(getState())) !== 0) {
    return Promise.resolve();
  }

  dispatch(stepGame(position, player));
  await delay(500);
  await dispatch(stepGameAsComputer(500));
};