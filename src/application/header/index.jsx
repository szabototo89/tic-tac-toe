import React from 'react';
import Button from '../../common/button';
import './style.css'; 

const Header = ({ isNewGameVisible, onNewGameToggle, players = [] }) => {
  return <div className="application-header__container">
    <Button className="application-header__new-game" 
            onClick={onNewGameToggle}>
      {!isNewGameVisible ? 'New Game' : 'Go back' }
    </Button>
    <ul className="application-header__players">
      {players.map((player, index) => 
        <li key={index} className="application-header__player">
          {player.name}
        </li>)}
    </ul>
  </div>;
}
  

export default Header;