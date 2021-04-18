import { INCREASE_GAME_SCORE, REDUCE_GAME_LIVES, RESTART_GAME } from 'store/actionTypes';
import { SignInAction, GameReducer } from 'types/actionTypes';

const initialState: GameReducer = {
  score: 0,
  lives: 5,
};

export const gameReducer = (
  state: GameReducer = initialState,
  action: SignInAction
): GameReducer => {
  switch (action.type) {
    case INCREASE_GAME_SCORE:
      const score = state.score + 1;
      return {
        ...state,
        score,
      };
    case REDUCE_GAME_LIVES:
      const lives = state.lives - 1;
      return {
        ...state,
        lives,
      };
    case RESTART_GAME:
      return {
        ...state,
        score: 0,
        lives: 5,
      };
    default:
      return state;
  }
};
