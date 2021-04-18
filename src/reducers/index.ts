import { combineReducers } from 'redux';

import { userReducer } from './user';
import { gameReducer } from './game';
import { gameModalReducer } from './GameModal';

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  gameModal: gameModalReducer,
});
