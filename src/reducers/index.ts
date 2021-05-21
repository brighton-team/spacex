import { combineReducers } from 'redux';

import { userReducer } from './user';
import { gameReducer } from './game';
import { gameModalReducer } from './GameModal';
import { leadersReducer } from './leaders';
import { feedbackReducer } from './feedback';

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  gameModal: gameModalReducer,
  leaders: leadersReducer,
  feedback: feedbackReducer,
});
