import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  PUT_GAME_LEADER_DATA_REQUEST,
  PUT_GAME_LEADER_DATA_SUCCESS,
  PUT_GAME_LEADER_DATA_FAILURE,
} from 'store/actionTypes';
import { ApiServiceInstance } from 'utils/ApiService/ApiService';
import { ActionType, UserState } from '../types/actionTypes';

export type LeaderDataType = {
  data: {
    userName: string;
    score: number;
  };
  ratingFieldName: string;
};

type LeaderActionType = {
  type: string;
  payload: LeaderDataType;
};

const putGameLeaderDataRequest = (data: LeaderDataType): LeaderActionType => ({
  type: PUT_GAME_LEADER_DATA_REQUEST,
  payload: data,
});

const putGameLeaderDataSuccess = (): ActionType => ({
  type: PUT_GAME_LEADER_DATA_SUCCESS,
});

const putGameLeaderDataFailure = (): ActionType => ({
  type: PUT_GAME_LEADER_DATA_FAILURE,
});

export const putGameLeaderDataAction = (userData: LeaderDataType) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(putGameLeaderDataRequest(userData));
  ApiServiceInstance.putGameLeaderData(userData)
    .then((response) => {
      const { status } = response;
      if (status === 200) {
        dispatch(putGameLeaderDataSuccess());
      }
    })
    .catch(() => dispatch(putGameLeaderDataFailure()));
};
