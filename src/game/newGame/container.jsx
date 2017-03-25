import React from 'react';
import { connect } from 'react-redux';

import NewGame from './index';
import { changePlayerName } from '../../reducers/actions/newGameActions';
import { getPlayerNames, getPlayerName } from '../../reducers/rootReducer';

const mapStateToProps = (state) => ({
  players: getPlayerNames(state),
  playerName: getPlayerName(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayerNameChange(playerName) {
    dispatch(changePlayerName(playerName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
