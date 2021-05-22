import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  // CREATE_FORUM_TOPIC_REQUEST,
  CREATE_FORUM_TOPIC_SUCCESS,
  GET_FORUM_TOPICS_REQUEST,
  GET_FORUM_TOPICS_SUCCESS,
  GET_FORUM_TOPICS_FAILURE,
  //
  // CREATE_FORUM_TOPIC_POST_REQUEST,
  CREATE_FORUM_TOPIC_POST_SUCCESS,
  // GET_FORUM_TOPIC_POSTS_REQUEST,
  GET_FORUM_TOPIC_POSTS_SUCCESS,
} from 'store/actionTypes';
import { ForumReducer, ForumAction } from 'types/actionTypes';
import { ForumTopicPost } from 'pages/ForumTopicView/ForumTopicView';
import { ApiServiceInstance } from '../utils/ApiService/ApiService';
import { ForumTopic } from '../pages/Forum/Forum';

export const getForumTopicsRequest = (): ForumAction => ({
  type: GET_FORUM_TOPICS_REQUEST,
});

export const getForumTopicsSuccess = (data: Array<ForumTopic>): ForumAction => ({
  type: GET_FORUM_TOPICS_SUCCESS,
  payload: {
    data,
  },
});

export const getForumTopicsFailure = (): ForumAction => ({
  type: GET_FORUM_TOPICS_FAILURE,
});

export const createForumTopicSuccess = (data: ForumTopic): ForumAction => ({
  type: CREATE_FORUM_TOPIC_SUCCESS,
  payload: {
    data,
  },
});

export const createForumTopicAction = (
  topicData: ForumTopic & {
    userId: number;
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

//

export const createForumTopicPostSuccess = (): ForumAction => ({
  type: CREATE_FORUM_TOPIC_POST_SUCCESS,
});

export const getForumTopicPostsSuccess = (
  data: Array<ForumTopicPost>,
  topicId: number
): ForumAction => ({
  type: GET_FORUM_TOPIC_POSTS_SUCCESS,
  payload: {
    data,
    topicId,
  },
});

export const createForumTopicPostAction = (postData: ForumTopicPost) => async (
  dispatch: ThunkDispatch<ForumReducer, void, Action>
): Promise<ForumTopicPost> => {
  // ApiServiceInstance.createForumTopicPost(postData)
  //   .then((res) => {
  //     dispatch(createForumTopicPostSuccess());
  //     return res.data;
  //   })
  //   .catch((err) => console.error(err));
  try {
    const res = await ApiServiceInstance.createForumTopicPost(postData);
    dispatch(createForumTopicPostSuccess());
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getForumTopicPosts = (topicId: number) => (
  dispatch: ThunkDispatch<ForumReducer, void, Action>
): void => {
  ApiServiceInstance.getForumTopicPosts(topicId)
    .then((res) => {
      dispatch(getForumTopicPostsSuccess(res.data, topicId));
    })
    .catch((err) => console.error(err));
};
