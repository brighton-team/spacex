import { createStore, compose, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { UserState } from '../types/actionTypes';
import { createRootReducer } from './rootReducer';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

function getComposeEnhancers() {
  if (process.env.NODE_ENV !== 'production' && !isServer) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return compose;
}

export function configureStore(initialState: UserState, url = '/') {
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory();

  const composeEnhancers = getComposeEnhancers();
  const middlewares = [routerMiddleware(history), thunkMiddleware];

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  ) as Store;

  // if (!isServer) {
  //   sagaMiddleware.run(rootSaga);
  // }

  return { store, history };
}
