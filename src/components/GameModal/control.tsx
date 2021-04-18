import { gameModalOpen, gameModalClose } from 'actions/gameModalActions';
import { store } from 'store';

export const openModal = () => {
  store.dispatch(gameModalOpen({ isVisible: true, isVisibleGameOver: false }));
};

export const closeModal = () => {
  store.dispatch(gameModalClose({ isVisible: false, isVisibleGameOver: false }));
};
