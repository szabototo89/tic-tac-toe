import React from 'react';
import GameField from '../gameField';
import { isEmpty } from '../../utils/arrays';
import './style.css';

const GameTable = ({ fields = [], onGameFieldSelect }) => {
  return <div className="game-table__container">
    {!isEmpty(fields) && <div className="game-table__game-fields">
      {fields.map((field, index) => 
        <GameField key={`${field.x}-${field.y}`} field={field} onSelect={onGameFieldSelect} />)}
    </div>}
  </div>;
};

export default GameTable;