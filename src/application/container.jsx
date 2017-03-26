import { connect } from 'react-redux';
import Application from './index';

import { getNewGameDialog, getGame } from '../reducers/appReducer';

import { 
  getPlayers,
  getFields,
  getCurrentPlayer,
  getWinner,
  getWinnerFields,
  isTie
} from '../reducers/game/reducer';

import { nextRound } from '../reducers/game/actions';

import { isNewGameDialogVisible } from '../reducers/newGameDialog/reducer';
import { toggleNewGameDialog } from '../reducers/newGameDialog/actions';

const mapStateToProps = (state) => ({
  fields: getFields(getGame(state)),
  currentPlayer: getCurrentPlayer(getGame(state)),
  players: getPlayers(getGame(state)),
  isNewGameDialogVisible: isNewGameDialogVisible(getNewGameDialog(state)),
  winner: getWinner(getGame(state)),
  winnerFields: getWinnerFields(getGame(state)),
  isTie: isTie(getGame(state))
});

const mapDispatchToProps = (dispatch) => ({
  onGameFieldSelect(position) {
    const player = 0;
    return dispatch(nextRound(position, player));
  },

  onNewGameDialogToggle() {
    return dispatch(toggleNewGameDialog());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Application);