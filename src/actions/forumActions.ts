import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  // CREATE_FORUM_TOPIC_REQUEST,
  CREATE_FORUM_TOPIC_SUCCESS,
  GET_FORUM_TOPICS_REQUEST,
  GET_FORUM_TOPICS_SUCCESS,
  GET_FORUM_TOPICS_FAILURE,
} from 'store/actionTypes';
import { ForumReducer, ForumAction } from 'types/actionTypes';
import { ApiServiceInstance } from '../utils/ApiService/ApiService';
import { ForumTopic } from '../pages/Forum/Forum';

export const getForumTopicsRequest = (): ForumAction => ({
  type: GET_FORUM_TOPICS_REQUEST,
});

export const getForumTopicsSuccess = (data: Array<ForumTopic>): ForumAction => ({
  type: GET_FORUM_TOPICS_SUCCESS,
  payload: data,
});

export const getForumTopicsFailure = (): ForumAction => ({
  type: GET_FORUM_TOPICS_FAILURE,
});

export const createForumTopicSuccess = (data: ForumTopic): ForumAction => ({
  type: CREATE_FORUM_TOPIC_SUCCESS,
  payload: data,
});

export const createForumTopicAction = (
  topicData: ForumTopic & {
    userId: number;
    time: Date;
  }
) => (dispatch: ThunkDispatch<ForumReducer, void, Action>): void => {
  ApiServiceInstance.createForumTopic(topicData)
    .then((res) => {
      dispatch(createForumTopicSuccess(res.data));
    })
    .catch((err) => console.error(err));
};

export const getForumTopicsAction = () => (
  dispatch: ThunkDispatch<ForumReducer, void, Action>
): void => {
  ApiServiceInstance.getForumTopics()
    .then((res) => {
      dispatch(getForumTopicsSuccess(res.data));
    })
    .catch((err) => console.error(err));
};
