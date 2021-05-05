import { GameModal, IGameModal } from 'types/actionTypes';
import { GAME_OVER_MODAL_TOGGLE, TOGGLE_GAME_MODAL } from 'store/actionTypes';

export const initialState: IGameModal = {
  isVisiblePauseGame: false,
  isVisibleGameOver: false,
};

export const gameModalReducer = (
  state: IGameModal = initialState,
  action: GameModal
): IGameModal => {
  const { type } = action;
  switch (type) {
    case TOGGLE_GAME_MODAL:
      return {
        ...state,
        isVisiblePauseGame: !state.isVisiblePauseGame,
      };
    case GAME_OVER_MODAL_TOGGLE:
      return {
        ...state,
        isVisibleGameOver: !state.isVisibleGameOver,
      };
    default:
      return initialState;
  }
};
