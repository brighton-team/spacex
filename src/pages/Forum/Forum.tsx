import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { ErrorBoundary } from 'components/ErrorBoundary';

import { FormModal } from 'components/FormModal';

import ForumsTable from './ForumsTable';

import {
  PageWrapper,
  Heading,
  TitleText,
  StyledButton,
  EmptySpace,
  TableWrapper,
  SubmitButton,
} from './styledItems';

export type ForumTopic = {
  id?: number;
  title?: string;
};

const submitButton = (
  <SubmitButton variant="outlined" type="submit" form="new-forum-topic">
    Создать
  </SubmitButton>
);

const Forum = (props: OwnProps): JSX.Element => {
  const { createForumTopic, userId } = props;

  const { control, handleSubmit, errors: fieldsErrors } = useForm<ForumTopic>();

  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisibility(false);
  }, []);

  const onSubmit = handleSubmit(({ title }) => {
    createForumTopic(title, userId);
    closeModal();
  });

  return (
    <PageWrapper padding="100px 0">
      <Heading>
        <EmptySpace />
        <TitleText>ТЕМЫ ФОРУМА</TitleText>
        <StyledButton variant="outlined" onClick={openModal}>
          СОЗДАТЬ НОВУЮ ТЕМУ
        </StyledButton>
      </Heading>

      <TableWrapper>
        <ErrorBoundary type="local">
          <ForumsTable />
        </ErrorBoundary>
      </TableWrapper>

      <FormModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        submitButton={submitButton}
        title="Создайте новую тему"
        formId="new-forum-topic"
        onSubmit={onSubmit}
        formFields={[{ title: 'title', label: 'Название темы', required: true }]}
        fieldsErrors={fieldsErrors}
        control={control}
      />
    </PageWrapper>
  );
};

type OwnProps = {
  createForumTopic: (title: string, userId: number) => void;
  userId: number;
};

export default Forum;
