import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from 'store';
import { App } from './components/App/App';

import 'normalize.css';

import './initServiceWorker';

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
