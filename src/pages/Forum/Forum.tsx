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

const submitButton = (
  <SubmitButton variant="outlined" type="submit" form="new-forum-topic">
    Создать
  </SubmitButton>
);

type FormData = {
  title: string;
};

const Forum = (): JSX.Element => {
  const { control, handleSubmit, errors: fieldsErrors } = useForm<FormData>();

  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisibility(false);
  }, []);

  const onSubmit = handleSubmit(({ title }) => {
    // TODO: remove console logging
    console.log('title:', title); // eslint-disable-line no-console
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

export default Forum;
