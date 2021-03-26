import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { useForm, Controller } from 'react-hook-form';

import Modal from 'shared/components/Modal';

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

type FormData = {
  title: string;
};

const Forum: React.FC = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisibility(false);
  }, []);

  const { control, handleSubmit, errors: fieldsErrors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ title }) => {
    console.log('title:', title); // eslint-disable-line no-console
    closeModal();
  });

  const submitButton = (
    <SubmitButton variant="outlined" type="submit" form="new-forum-topic">
      Создать
    </SubmitButton>
  );

  return (
    <PageWrapper>
      <Heading>
        <EmptySpace />
        <TitleText>ТЕМЫ ФОРУМА</TitleText>
        <StyledButton variant="outlined" onClick={openModal}>
          СОЗДАТЬ НОВУЮ ТЕМУ
        </StyledButton>
      </Heading>

      <TableWrapper>
        <ForumsTable />
      </TableWrapper>

      <Modal
        isVisible={isModalVisible}
        onOk={closeModal}
        onClose={closeModal}
        title="Создайте новую тему"
        okButton={submitButton}
      >
        <form id="new-forum-topic" onSubmit={onSubmit}>
          <FormControl fullWidth variant="outlined">
            <Controller
              name="title"
              as={
                <TextField
                  id="title"
                  autoFocus
                  margin="dense"
                  type="text"
                  fullWidth
                  helperText={fieldsErrors.title ? fieldsErrors.title.message : null}
                  label="Название темы"
                  error={Boolean(fieldsErrors.title)}
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
              }}
            />
          </FormControl>
        </form>
      </Modal>
    </PageWrapper>
  );
};

export default Forum;
