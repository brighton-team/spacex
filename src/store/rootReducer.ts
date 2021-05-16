import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { userReducer } from 'reducers/user';
import { gameReducer } from 'reducers/game';
import { gameModalReducer } from 'reducers/GameModal';
import { leadersReducer } from 'reducers/leaders';

export const createRootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    game: gameReducer,
    gameModal: gameModalReducer,
    leaders: leadersReducer,
    router: connectRouter(history),
  });
