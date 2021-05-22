import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { ForumReducer, UserState } from 'types/actionTypes';

// eslint-disable-next-line import/no-cycle
import { createForumTopicPostAction, getForumTopicPosts } from '../../actions/forumActions';

import ForumTopicView from './ForumTopicView';

const mapStateToProps = (state: UserState, ownProps: any) => {
  const {
    user: {
      data: { id },
    },
    forum: { topics },
  } = state;

  const { id: topicId } = ownProps.match.params;

  const posts = topics[topicId]?.posts || [];

  return {
    userId: id,
    topicId,
    posts,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<ForumReducer, void, Action>) => ({
  createPost: async (text: string, topicId: number, userId: number) => {
    await dispatch(
      createForumTopicPostAction({
        text,
        topicId,
        userId,
      })
    );
    dispatch(getForumTopicPosts(topicId));
  },
  getPosts: (topicId: number) => {
    dispatch(getForumTopicPosts(topicId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForumTopicView);
