import { connect } from 'react-redux';
import Application from './index';

import { getGameFields, getPlayerNames, isNewGameVisible, isGameOver } from '../reducers/rootReducer';
import { startNewGame, selectGameField, stepGame } from '../reducers/actions/gameActions';
import { toggleNewGameWindow } from '../reducers/actions/newGameActions';

const mapStateToProps = (state) => ({
  fields: getGameFields(state),
  players: getPlayerNames(state),
  isNewGameVisible: isNewGameVisible(state),
  isGameOver: isGameOver(state)
});

const mapDispatchToProps = (dispatch, { isGameOver }) => ({
  onNewGameStart(players) { 
    dispatch(startNewGame(3, players));
  },

  onGameFieldSelect(field) {
    !isGameOver && dispatch(stepGame(field));
  },

  onNewGameToggle() {
    dispatch(toggleNewGameWindow());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Application);