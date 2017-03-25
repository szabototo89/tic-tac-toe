import React from 'react';
import './style.css';

const symbols = ['X', 'O'];

const getSymbol = (owner) => symbols[owner];
const getClassName = (owner) => owner !== null 
  ? `game-field--symbol-${getSymbol(owner).toLowerCase()}` 
  : '';

const GameField = ({ field, onSelect }) => {
  const { owner } = field;

  return <div className={`game-field ${getClassName(owner)}`} 
              onClick={onSelect}>
    {getSymbol(owner)}
  </div>;
};

export default GameField;