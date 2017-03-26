import React from 'react';
import TextBox from '../../common/textBox';
import Button from '../../common/button';
import className from '../../utils/className';
import './style.css';

const isPlayerNameValid = (playerName) => !!playerName;

const NewGame = ({ onNewGameStart, onPlayerNameChange, playerName }) => {
  const handleNewGameStart = () => {
    isPlayerNameValid(playerName) && onNewGameStart && onNewGameStart(playerName);
  };

  const handlePlayerNameChange = (playerName) => {
    onPlayerNameChange && onPlayerNameChange(playerName);
  };

  return <div className="new-game__container">
    <TextBox placeholder="Please specify a name here ..."
             label={<h1>Player Name</h1>}
             className="new-game__player-name-textbox"
             onChange={handlePlayerNameChange}
             value={playerName} />

    {<Button className={`new-game__start-button ${className('new-game__start-button--visible', isPlayerNameValid(playerName))}`} 
             onClick={handleNewGameStart}>
      Start
    </Button>}
  </div>;
};

export default NewGame;
