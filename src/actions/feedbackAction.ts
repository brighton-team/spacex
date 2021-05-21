import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE,
  RESET_FEEDBACK,
} from 'store/actionTypes';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { ActionType, UserState } from '../types/actionTypes';
import { ApiServiceInstance } from '../utils/ApiService/ApiService';

export type FeedbackData = {
  name: string;
  email: string;
  text: string;
};

export const createFeedbackRequest = (): ActionType => ({
  type: CREATE_FEEDBACK_REQUEST,
});

export const createFeedbackSuccess = (): ActionType => ({
  type: CREATE_FEEDBACK_SUCCESS,
});

export const createFeedbackFailure = (): ActionType => ({
  type: CREATE_FEEDBACK_FAILURE,
});

export const resetFeedback = (): ActionType => ({
  type: RESET_FEEDBACK,
});

export const createFeedBackAction = (data: FeedbackData) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(createFeedbackRequest());
  ApiServiceInstance.createFeedback(data)
    .then(() => {
      dispatch(createFeedbackSuccess());
    })
    .catch(() => dispatch(createFeedbackFailure()));
};
