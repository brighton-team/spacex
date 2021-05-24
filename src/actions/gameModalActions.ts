import { GameModal } from 'types/actionTypes';
import { TOGGLE_GAME_MODAL } from 'store/actionTypes';

export const toggleGameModal = (): GameModal => ({
  type: TOGGLE_GAME_MODAL,
});
