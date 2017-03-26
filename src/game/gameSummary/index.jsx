import React from 'react';
import './style.css';

const GameSummary = ({ winner, isTie }) => {
  return <div className="game-summary">
    {isTie 
      ? <span>Game is tie!</span>
      : <span>
          The winner is <span className="game-summary__winner">
            {winner}
          </span>
        </span>}
  </div>;
};

export default GameSummary;