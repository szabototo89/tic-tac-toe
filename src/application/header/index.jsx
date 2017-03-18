import React from 'react';
import Button from '../../common/button';

const Navigation = ({ onNewGameStart }) => <div className="application__navigation">
  <Button onClick={onNewGameStart}>
    New Game
  </Button>
</div>;

export default Navigation;