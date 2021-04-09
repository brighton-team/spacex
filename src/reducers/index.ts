import { combineReducers } from 'redux';

import { userReducer } from './user';
import { pauseWindowReducer } from './PauseWindow';

export const rootReducer = combineReducers({
  user: userReducer,
  pauseWindow: pauseWindowReducer,
});
