import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { userReducer } from 'reducers/user';
import { gameReducer } from 'reducers/game';
import { gameModalReducer } from 'reducers/GameModal';

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    game: gameReducer,
    gameModal: gameModalReducer,
    router: connectRouter(history),
  });
