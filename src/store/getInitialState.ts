import { RouterState } from 'connected-react-router';
import { initialState as game } from 'reducers/game';
import { initialState as gameModal } from 'reducers/GameModal';
import { initialState as user } from 'reducers/user';
import { UserState } from '../types/actionTypes';

export const getInitialState = (pathname = '/'): UserState => {
  return {
    game,
    gameModal,
    user,
    router: {
      location: { pathname, search: '', hash: '', key: '' },
      action: 'POP',
    } as RouterState,
  };
};
