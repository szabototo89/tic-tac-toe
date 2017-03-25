import React from 'react';
import GameTable from '../game/gameTable';
import NewGame from '../game/newGameDialog/container';
import GameSummary from '../game/gameSummary';
import Header from './header';

const Application = (props) => {
  const { fields, currentPlayer, players, isNewGameDialogVisible, isGameOver } = props;
  const { onNewGameStart, onGameFieldSelect, onNewGameDialogToggle } = props;

  return <div className="application__container">
    <Header isNewGameDialogVisible={isNewGameDialogVisible} 
            players={players} 
            currentPlayer={currentPlayer}
            onNewGameDialogToggle={onNewGameDialogToggle} />
    {isNewGameDialogVisible && <NewGame onNewGameStart={onNewGameStart} />}
    {!isNewGameDialogVisible && <GameTable fields={fields} onGameFieldSelect={onGameFieldSelect} />}
    {/*{isGameOver && <GameSummary winner="Player 1" />}*/}
  </div>;
};

export default Application;
