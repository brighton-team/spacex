import { createSelector } from 'reselect';
import { UserState } from '../../types/actionTypes';

const getIsAvatarChanged = (state: UserState) => state.user.isAvatarChanged;
const getIsPasswordChanged = (state: UserState) => state.user.isPasswordChanged;
const getIsLoadedUser = (state: UserState) => state.user.loaded;
const getThemeName = (state: UserState) => state.user.theme.name;

export const IsAvatarChangedSelector = createSelector(
  getIsAvatarChanged,
  (isAvatarChanged: boolean) => isAvatarChanged
);

export const IsPasswordChangedSelector = createSelector(
  getIsPasswordChanged,
  (isPasswordChanged: boolean) => isPasswordChanged
);

export const themeName = createSelector(getThemeName, (getThemeName: string) => getThemeName);

export const IsLoadedUserSelector = createSelector(getIsLoadedUser, (loaded: boolean) => loaded);
