import { combineReducers } from 'redux';

import { userReducer } from './user';
import { gameModalReducer } from './GameModal';

export const rootReducer = combineReducers({
  user: userReducer,
  gameModal: gameModalReducer,
});
