import React from 'react';
import GameField from '../gameField';

const GameTable = ({ fields = [] }) => {
  return <div className="game-table__container">
    {fields.map((field, index) => 
      <GameField key={index} field={field} />)}
  </div>;
};

export default GameTable;