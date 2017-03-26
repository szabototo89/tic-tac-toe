import randomStep from '../../services/randomStep';
import { getGame } from '../appReducer';
import { getFields, getCurrentPlayer, hasWinner } from '../game/reducer';

export const STEP_GAME = 'STEP_GAME';

export const stepGame = (position, currentPlayer) => ({
  type: STEP_GAME,
  payload: { position, currentPlayer }
});

const delay = (duration) => new Promise(resolve => {
  setTimeout(resolve, duration);
});

export const nextRound = (position, player) => async (dispatch, getState) => {
  if (player !== getCurrentPlayer(getGame(getState()))) {
    return Promise.resolve();
  }

  dispatch(stepGame(position, player));

  const nextState     = getState(),
        nextGame      = getGame(nextState),
        nextFields    = getFields(nextGame),
        nextPlayer    = getCurrentPlayer(nextGame),
        hasGameWinner = hasWinner(nextGame);

  if (hasGameWinner) return Promise.resolve();

  await delay(500);
  const computerPosition = randomStep(nextFields);
  computerPosition !== null && dispatch(stepGame(computerPosition, nextPlayer));
};