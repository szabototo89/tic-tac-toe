import React from 'react';
import GameField from '../gameField';
import { isEmpty } from '../../utils/arrays';
import './style.css';

const GameTable = ({ fields = [], onGameFieldSelect }) => {
  const handleGameFieldSelect = (position) => () => {
    return onGameFieldSelect && onGameFieldSelect(position);
  }

  return <div className="game-table__container">
    {fields && !isEmpty(fields) && <div className="game-table__game-fields">
      {fields.map((field, index) => 
        <GameField key={`${index} - ${field && field.owner}`} 
                   field={field} 
                   onSelect={handleGameFieldSelect(index)} />)}
    </div>}
  </div>;
};

export default GameTable;