import { connect } from 'react-redux';
import Application from './index';

import { getGameFields } from '../reducers/rootReducer';
import { startNewGame } from '../reducers/actions/gameActions';

const mapStateToProps = (state) => ({
  fields: getGameFields(state)
});

const mapDispatchToProps = (dispatch) => ({
  onNewGameStart: () => dispatch(startNewGame(3))
})

export default connect(mapStateToProps, mapDispatchToProps)(Application);