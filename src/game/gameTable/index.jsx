import React from 'react';
import GameField from '../gameField';
import { isEmpty } from '../../utils/arrays';
import className from '../../utils/className';
import './style.css';

const GameTable = ({ fields = [], players, currentPlayer, onGameFieldSelect, winnerFields }) => {
  const handleGameFieldSelect = (position) => () => {
    if (currentPlayer !== 0) return;
    return onGameFieldSelect && onGameFieldSelect(position);
  };

  const hasFields = fields && !isEmpty(fields);
  const isActive = (index) => winnerFields && winnerFields.some(field => field === index);

  return <div className="game-table__container">
    <ul className="game-table__players">
      {players.map((player, index) => 
        <li key={index} className={`game-table__player ${className('game-table__player--active', index === currentPlayer)}`}>
          {player}
        </li>)}
    </ul>

    {hasFields && <div className="game-table__game-fields">
      {fields.map((field, index) => 
        <GameField key={`${index} - ${field && field.owner}`} 
                   field={field}
                   isActive={isActive(index)} 
                   onSelect={handleGameFieldSelect(index)} />)}
    </div>}
  </div>;
};

export default GameTable;