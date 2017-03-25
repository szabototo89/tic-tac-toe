import React from 'react';
import GameTable from '../game/gameTable';
import NewGame from '../game/newGame/container';
import GameSummary from '../game/gameSummary';
import Header from './header';

const Application = (props) => {
  const { fields, players, isNewGameVisible, isGameOver } = props;
  const { onNewGameStart, onGameFieldSelect, onNewGameToggle } = props;

  return <div className="application__container">
    <Header isNewGameVisible={isNewGameVisible} 
            players={players} 
            onNewGameToggle={onNewGameToggle} />
    {isNewGameVisible && <NewGame onNewGameStart={onNewGameStart} />}
    {!isNewGameVisible && <GameTable fields={fields} onGameFieldSelect={onGameFieldSelect} />}
    {isGameOver && <GameSummary winner="Player 1" />}
  </div>;
};

export default Application;
