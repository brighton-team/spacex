import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { UserDataType } from 'pages/Login/Login';

import { forum } from 'consts/routes';

import { FormModal } from 'components/FormModal';

import MessageCard from './MessageCard';

import {
  PageWrapper,
  Heading,
  TitleText,
  StyledButton,
  StyledLink,
  TableWrapper,
  SubmitButton,
} from './styledItems';

export type ForumTopicPost = {
  id?: number;
  text?: string;
  topicId?: number;
  userId?: number;
  time?: string;
  user?: UserDataType;
};

const submitButton = (
  <SubmitButton variant="outlined" type="submit" form="new-forum-message">
    Опубликовать
  </SubmitButton>
);

const ForumTopicView = (props: OwnProps): JSX.Element => {
  const { createPost, userId, topicId, getPosts, posts } = props;

  useEffect(() => {
    getPosts(topicId);
  }, [topicId]);

  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisibility(false);
  }, []);

  const { control, handleSubmit, errors: fieldsErrors } = useForm<ForumTopicPost>();

  const onSubmit = handleSubmit(({ text }) => {
    createPost(text, topicId, userId);
    closeModal();
  });

  return (
    <PageWrapper>
      <Heading>
        <StyledLink to={forum}>Назад</StyledLink>
        <TitleText>ТЕМА</TitleText>
        <StyledButton variant="outlined" onClick={openModal}>
          Новое сообщение
        </StyledButton>
      </Heading>

      <TableWrapper>
        {posts.map((post) => (
          <MessageCard
            key={post.id}
            authorName={post.user?.login}
            datePublished={post.time}
            message={post.text}
          />
        ))}
      </TableWrapper>

      <FormModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        submitButton={submitButton}
        title="Опубликуйте сообщение"
        formId="new-forum-message"
        onSubmit={onSubmit}
        formFields={[{ title: 'text', label: 'Сообщение', required: true }]}
        fieldsErrors={fieldsErrors}
        control={control}
      />
    </PageWrapper>
  );
};

type OwnProps = {
  createPost: (text: string, topicId: number, userId: number) => void;
  userId: number;
  topicId: number;
  getPosts: (topicId: number) => void;
  posts: Array<ForumTopicPost>;
};

export default ForumTopicView;
