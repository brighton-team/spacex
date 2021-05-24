import { ActionType } from 'types/actionTypes';
import {
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
  CREATE_FEEDBACK_FAILURE,
  RESET_FEEDBACK,
} from 'store/actionTypes';

export type FeedbackType = {
  feedbackSuccess: boolean;
  isErrorFeedback: boolean;
  isRequestingFeedback: boolean;
};

export const initialState: FeedbackType = {
  feedbackSuccess: false,
  isErrorFeedback: false,
  isRequestingFeedback: false,
};

export const feedbackReducer = (
  state: FeedbackType = initialState,
  action: ActionType
): FeedbackType => {
  switch (action.type) {
    case CREATE_FEEDBACK_REQUEST:
      return {
        ...state,
        isRequestingFeedback: true,
      };
    case CREATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedbackSuccess: true,
        isRequestingFeedback: false,
      };
    case CREATE_FEEDBACK_FAILURE:
      return {
        ...state,
        isRequestingFeedback: false,
        isErrorFeedback: true,
      };
    case RESET_FEEDBACK:
      return {
        feedbackSuccess: false,
        isErrorFeedback: false,
        isRequestingFeedback: false,
      };
    default:
      return state;
  }
};
