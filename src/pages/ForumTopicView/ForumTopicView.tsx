import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { useForm, Controller } from 'react-hook-form';

import Modal from 'shared/components/Modal';

import MessageCard from './MessageCard';

import {
  PageWrapper,
  Heading,
  TitleText,
  StyledButton,
  TableWrapper,
  SubmitButton,
} from './styledItems';

type FormData = {
  message: string;
};

const messages = [
  {
    id: 1,
    authorName: 'Соло',
    datePublished: '25.03.2247',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra vulputate ante, vel imperdiet tellus dictum in. Nullam tristique, urna sed tincidunt tristique, ex nisl semper ipsum, at eleifend leo nisl sit amet massa. Sed eleifend urna massa, vel gravida lectus elementum et. Nullam pharetra lacus nec ante blandit pulvinar. Integer ornare mi id est interdum viverra. Vivamus ex ante, tempor tincidunt mi in, blandit scelerisque augue. Mauris a dapibus enim. Donec et dapibus nunc. Fusce mi libero, dictum vitae elementum quis, consequat non purus. Integer eros orci, condimentum sed elementum in, lobortis et risus. Suspendisse potenti. In sed quam ornare, ultrices est vel, hendrerit nunc. Fusce consequat efficitur vehicula. Donec non ullamcorper leo. Proin tristique laoreet magna eu pretium. Praesent rhoncus velit at justo tempus porta. Nam convallis, odio quis imperdiet imperdiet, lacus sapien vestibulum dolor, quis luctus massa augue id lacus. Cras placerat pretium finibus. Morbi eget varius risus. Nulla dui diam, interdum et efficitur vel, porttitor eget urna. Donec et ex non ante venenatis cursus. Cras ac velit fermentum massa faucibus molestie.',
  },
  {
    id: 2,
    authorName: 'Соло',
    datePublished: '25.03.2247',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra vulputate ante, vel imperdiet tellus dictum in. Nullam tristique, urna sed tincidunt tristique, ex nisl semper ipsum, at eleifend leo nisl sit amet massa. Sed eleifend urna massa, vel gravida lectus elementum et. Nullam pharetra lacus nec ante blandit pulvinar. Integer ornare mi id est interdum viverra. Vivamus ex ante, tempor tincidunt mi in, blandit scelerisque augue. Mauris a dapibus enim. Donec et dapibus nunc. Fusce mi libero, dictum vitae elementum quis, consequat non purus. Integer eros orci, condimentum sed elementum in, lobortis et risus. Suspendisse potenti. In sed quam ornare, ultrices est vel, hendrerit nunc. Fusce consequat efficitur vehicula. Donec non ullamcorper leo. Proin tristique laoreet magna eu pretium. Praesent rhoncus velit at justo tempus porta. Nam convallis, odio quis imperdiet imperdiet, lacus sapien vestibulum dolor, quis luctus massa augue id lacus. Cras placerat pretium finibus. Morbi eget varius risus. Nulla dui diam, interdum et efficitur vel, porttitor eget urna. Donec et ex non ante venenatis cursus. Cras ac velit fermentum massa faucibus molestie.',
  },
];

const ForumTopicView: React.FC = () => {
  const history = useHistory();

  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisibility(false);
  }, []);

  const { control, handleSubmit, errors: fieldsErrors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ message }) => {
    console.log('message:', message); // eslint-disable-line no-console
    closeModal();
  });

  const submitButton = (
    <SubmitButton variant="outlined" type="submit" form="new-forum-message">
      Опубликовать
    </SubmitButton>
  );

  const goBack = () => {
    history.push('/forum');
  };

  return (
    <PageWrapper>
      <Heading>
        <StyledButton variant="outlined" onClick={goBack}>
          Назад
        </StyledButton>
        <TitleText>ТЕМА</TitleText>
        <StyledButton variant="outlined" onClick={openModal}>
          Новое сообщение
        </StyledButton>
      </Heading>

      <TableWrapper>
        {messages.map((message) => (
          <MessageCard key={message.id} {...message} />
        ))}
      </TableWrapper>

      <Modal
        isVisible={isModalVisible}
        onOk={closeModal}
        onClose={closeModal}
        title="Опубликуйте сообщение"
        okButton={submitButton}
      >
        <form id="new-forum-message" onSubmit={onSubmit}>
          <FormControl fullWidth variant="outlined">
            <Controller
              name="message"
              as={
                <TextField
                  id="message"
                  multiline
                  autoFocus
                  margin="dense"
                  type="text"
                  fullWidth
                  helperText={fieldsErrors.message ? fieldsErrors.message.message : null}
                  label="Сообщение"
                  error={Boolean(fieldsErrors.message)}
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

export default ForumTopicView;
