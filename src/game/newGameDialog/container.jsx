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
    return dispatch(changePlayerName(playerName));
  },

  onNewGameStart(playerName) {
    return dispatch(startNewGame(playerName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);

