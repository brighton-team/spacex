import { GameModal, IGameModal } from 'types/actionTypes';
import { GAME_OVER_MODAL_TOGGLE, TOGGLE_GAME_MODAL, TOGGLE_HEADER } from 'store/actionTypes';

const initialState: IGameModal = {
  isVisible: false,
  isVisibleGameOver: false,
  isVisibleHeader:true,
};

export const gameModalReducer = (state: IGameModal, action: GameModal): IGameModal => {
  const { type } = action;
  switch (type) {
    case TOGGLE_GAME_MODAL:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case GAME_OVER_MODAL_TOGGLE:
      return {
        ...state,
        isVisibleGameOver: !state.isVisibleGameOver,
      };
      case TOGGLE_HEADER:
        return {
          ...state,
          isVisibleHeader: !state.isVisibleHeader,
        };
    default:
      return initialState;
  }
};
