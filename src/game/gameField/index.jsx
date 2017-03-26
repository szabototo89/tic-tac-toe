import React from 'react';
import className from '../../utils/className';
import './style.css';

const symbols = ['X', 'O'];

const isEmptyField = ({ owner }) => owner === null;
const getSymbol = ({ owner }) => symbols[owner];
const getClassName = (field) => !isEmptyField(field) 
  ? `game-field--symbol-${getSymbol(field).toLowerCase()}` 
  : '';

const GameField = ({ field, isActive, onSelect }) => {
  const handleSelect = () => {
    isEmptyField(field) && onSelect && onSelect();
  };

  return <div className={`game-field ${getClassName(field)} ${className('game-field--selected', isActive)}`} 
              onClick={handleSelect}>
    {getSymbol(field)}
  </div>;
};

export default GameField;