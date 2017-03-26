import React from 'react';
import Button from '../../common/button';
import './style.css'; 

const Header = ({ isNewGameDialogVisible, onNewGameDialogToggle }) => {
  return <div className="application-header__container">
    <h1 className="application-header__title">
      Tic Tac Toe
    </h1>

    <Button className="application-header__new-game" 
            onClick={onNewGameDialogToggle}>
      {!isNewGameDialogVisible ? 'New Game' : 'Go back' }
    </Button>
  </div>;
}
  

export default Header;