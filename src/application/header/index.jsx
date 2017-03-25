import React from 'react';
import Button from '../../common/button';
import className from '../../utils/className';
import './style.css'; 

const Header = ({ currentPlayer, isNewGameDialogVisible, onNewGameDialogToggle, players = [] }) => {
  return <div className="application-header__container">
    <Button className="application-header__new-game" 
            onClick={onNewGameDialogToggle}>
      {!isNewGameDialogVisible ? 'New Game' : 'Go back' }
    </Button>
    <ul className="application-header__players">
      {players.map((player, index) => 
        <li key={index} className={`application-header__player ${className('application-header__player--active', index === currentPlayer)}`}>
          {player}
        </li>)}
    </ul>
  </div>;
}
  

export default Header;