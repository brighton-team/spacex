import { pauseWindowOpen, pauseWindowClose } from 'actions/pauseWindowActions';
import { store } from 'store';
 

export const openModal = () => {
    store.dispatch(pauseWindowOpen({ isVisible: true }));
  };

export const closeModal = () => {
    store.dispatch(pauseWindowClose({ isVisible: false }));
  };