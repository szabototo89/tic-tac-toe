import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Application from './application/container';

import applicationStore from './stores/applicationStore';
import './index.css';

ReactDOM.render(
  <Provider store={applicationStore}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
