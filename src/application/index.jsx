import React from 'react';
import GameTable from '../gameTable';
import Header from './header';

import { Provider } from 'react-redux';
import applicationStore from '../stores/applicationStore';

const Application = ({ fields, onNewGameStart }) => {
  return <div className="application__container">
    <Header onNewGameStart={onNewGameStart} />

    <GameTable fields={fields} />
  </div>;
};

export default Application;