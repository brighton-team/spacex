import { combineReducers } from 'redux';

import { userReducer } from './user';
import { gameReducer } from './game';

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});
