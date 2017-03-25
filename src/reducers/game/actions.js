import randomStep from '../../services/randomStep';
import { getGame } from '../appReducer';
import { getFields } from '../game/reducer';

export const STEP_GAME = 'STEP_GAME';

export const stepGame = (position) => ({
  type: STEP_GAME,
  payload: { position }
});

const delay = (duration) => new Promise(resolve => {
  setTimeout(resolve, duration);
});

export const nextRound = (position) => async (dispatch, getState) => {
  dispatch(stepGame(position));
  const nextState = getState();
  const fields = getFields(getGame(nextState));
  await delay(500);
  const computerPosition = randomStep(fields);
  computerPosition !== null && dispatch(stepGame(computerPosition));
};