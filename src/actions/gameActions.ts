import { INCREASE_GAME_SCORE, REDUCE_GAME_LIVES } from 'store/actionTypes';
import { SignInAction } from '../types/actionTypes';

export const increaseGameScore = (): SignInAction => ({
  type: INCREASE_GAME_SCORE,
});

export const reduceGameLives = (): SignInAction => ({
  type: REDUCE_GAME_LIVES,
});
