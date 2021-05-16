import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  PUT_GAME_LEADER_DATA_REQUEST,
  PUT_GAME_LEADER_DATA_FAILURE,
  GET_GAME_LEADER_DATA_REQUEST,
  GET_GAME_LEADER_DATA_SUCCESS,
  GET_GAME_LEADER_DATA_FAILURE,
} from 'store/actionTypes';
import { ApiServiceInstance } from 'utils/ApiService/ApiService';
import { ActionType, Leader, UserState } from '../types/actionTypes';

export type LeaderDataType = {
  data: {
    userName: string;
    scorespacex: number;
  };
  ratingFieldName: string;
};

export type LeaderDataRequestType = {
  ratingFieldName: string;
  cursor: number;
  limit: number;
};

export type LeaderDataResponseType = {
  data: Array<Leader>;
};

export type LeaderActionType = {
  type: string;
  payload: Array<Leader>;
};

export type LeaderRequestType = {
  type: string;
  payload: LeaderDataType | LeaderDataRequestType;
};

const putGameLeaderDataRequest = (data: LeaderDataType): LeaderRequestType => ({
  type: PUT_GAME_LEADER_DATA_REQUEST,
  payload: data,
});

const putGameLeaderDataFailure = (): ActionType => ({
  type: PUT_GAME_LEADER_DATA_FAILURE,
});

const getGameLeaderDataRequest = (data: LeaderDataRequestType): LeaderRequestType => ({
  type: GET_GAME_LEADER_DATA_REQUEST,
  payload: data,
});

const getGameLeaderDataSuccess = (data: LeaderDataRequestType): LeaderRequestType => ({
  type: GET_GAME_LEADER_DATA_SUCCESS,
  payload: data,
});

const getGameLeaderDataFailure = (): ActionType => ({
  type: GET_GAME_LEADER_DATA_FAILURE,
});

export const putGameLeaderDataAction = (userData: LeaderDataType) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(putGameLeaderDataRequest(userData));
  ApiServiceInstance.putGameLeaderData(userData).catch(() => dispatch(putGameLeaderDataFailure()));
};

export const getGameLeaderDataAction = (requestData: LeaderDataRequestType) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(getGameLeaderDataRequest(requestData));
  ApiServiceInstance.getGameLeaderData(requestData)
    .then((response) => {
      const { data, status } = response;
      if (status === 200) {
        dispatch(getGameLeaderDataSuccess(data));
      }
    })
    .catch(() => dispatch(getGameLeaderDataFailure()));
};
