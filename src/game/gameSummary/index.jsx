import React from 'react';

const GameSummary = ({ winner }) => {
  return <div className="game-summary">
    The winner is <span className="game-summar__winner">
      {winner}
    </span>
  </div>;
};

export default GameSummary;