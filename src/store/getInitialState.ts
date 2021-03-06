import { RouterState } from 'connected-react-router';
import { initialState as game } from 'reducers/game';
import { initialState as gameModal } from 'reducers/GameModal';
import { initialState as user } from 'reducers/user';
import { initialState as fullscreen } from 'reducers/Fullscreen';
import { initialState as leaders } from 'reducers/leaders';
import { initialState as forum } from 'reducers/forum';
import { UserState } from '../types/actionTypes';

export const getInitialState = (pathname = '/'): UserState => {
  return {
    game,
    gameModal,
    user,
    leaders,
    router: {
      location: { pathname, search: '', hash: '', key: '' },
      action: 'POP',
    } as RouterState,
    fullscreen,
    forum,
  };
};
