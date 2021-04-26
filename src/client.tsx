import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import 'babel-polyfill';
import 'normalize.css';

import { ConnectedRouter } from 'connected-react-router';
import { App } from 'components/App/App';
import { UserState } from 'types/actionTypes';
import { configureStore } from 'store/rootstore';

const { store, history } = configureStore(window.INITIAL_STATE);

// global redeclared types
declare global {
  interface Window {
    INITIAL_STATE: UserState;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

hydrate(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('mount')
);
