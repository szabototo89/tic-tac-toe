import { compose } from 'redux';
import { connect } from 'react-redux';
import Application from './index';

import { getNewGameDialog, getGame } from '../reducers/appReducer';

import { getPlayers, getFields, getCurrentPlayer } from '../reducers/game/reducer';
import { stepGame, nextRound } from '../reducers/game/actions';

import { isNewGameDialogVisible } from '../reducers/newGameDialog/reducer';
import { toggleNewGameDialog } from '../reducers/newGameDialog/actions';

const mapStateToProps = (state) => ({
  fields: getFields(getGame(state)),
  currentPlayer: getCurrentPlayer(getGame(state)),
  players: getPlayers(getGame(state)),
  isNewGameDialogVisible: isNewGameDialogVisible(getNewGameDialog(state)),
});

const mapDispatchToProps = (dispatch) => ({
  onGameFieldSelect(position) {
    dispatch(nextRound(position));
  },

  onNewGameDialogToggle() {
    dispatch(toggleNewGameDialog());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Application);