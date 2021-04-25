import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import 'babel-polyfill';

import { App } from './components/App/App';
import { store } from './store';

// global redeclared types
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/ban-types
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

hydrate(
  <ReduxProvider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <App />
    {/* </ConnectedRouter> */}
  </ReduxProvider>,
  document.getElementById('mount')
);
