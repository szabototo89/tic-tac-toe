import React from 'react';
import './style.css';

const GameField = ({ field, onSelect }) => {
  const { value } = field;

  const handleGameFieldClick = () => {
    return onSelect && onSelect(field);
  };

  return <div className="game-field" onClick={handleGameFieldClick}>
    {value}
  </div>;
};

export default GameField;