import React from 'react';
import { connect } from 'react-redux';

import NewGame from './index';
import { changePlayerName, startNewGame } from '../../reducers/newGameDialog/actions';
import { getPlayerName } from '../../reducers/newGameDialog/reducer';
import { getNewGameDialog } from '../../reducers/appReducer';

const mapStateToProps = (state) => ({
  playerName: getPlayerName(getNewGameDialog(state))
});

const mapDispatchToProps = (dispatch) => ({
  onPlayerNameChange(playerName) {
    dispatch(changePlayerName(playerName));
  },

  onNewGameStart(playerName) {
    dispatch(startNewGame(playerName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);

