import React from 'react';
import GameTable from '../game/gameTable';
import NewGame from '../game/newGameDialog/container';
import GameSummary from '../game/gameSummary';
import Header from './header';
import './style.css';

const Application = (props) => {
  const { fields, currentPlayer, players, isNewGameDialogVisible } = props;
  const { winner, winnerFields, isTie } = props;
  const { onNewGameStart, onGameFieldSelect, onNewGameDialogToggle } = props;

  const hasWinner = winner !== null || isTie;

  return <div className="application__container">
    <Header isNewGameDialogVisible={isNewGameDialogVisible} 
            onNewGameDialogToggle={onNewGameDialogToggle} />
    <div className="application__content">
      {isNewGameDialogVisible && 
        <NewGame onNewGameStart={onNewGameStart} />}

      {!isNewGameDialogVisible && 
        <GameTable fields={fields} 
                   winnerFields={winnerFields}
                   players={players} 
                   currentPlayer={currentPlayer} 
                   onGameFieldSelect={onGameFieldSelect} />}

      {!isNewGameDialogVisible && hasWinner && 
        <GameSummary winner={winner} isTie={isTie} />}
    </div>
  </div>;
};

export default Application;
