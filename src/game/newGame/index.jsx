import React from 'react';
import TextBox from '../../common/textBox';
import Button from '../../common/button';
import './style.css';

const NewGame = ({ onNewGameStart, onPlayerNameChange, players, playerName }) => {
  const handleNewGameStart = () => {
    onNewGameStart && onNewGameStart(players);
  };

  const handlePlayerNameChange = (playerName) => {
    onPlayerNameChange && onPlayerNameChange(playerName);
  }

  return <div className="new-game__container">
    <h1>Start game</h1>

    <TextBox label="Player Name"
             placeholder="Please specify a name here ..."
             onChange={handlePlayerNameChange}
             value={playerName} />

    <Button onClick={handleNewGameStart}>
      Start
    </Button>
  </div>;
}

export default NewGame;
