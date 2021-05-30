import React from 'react';
import { FormControl } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { PageWrapper, TableWrapper } from '../Forum/styledItems';
import { FormInputWrapper, TextButton } from '../Login/styles';
import { StyledButton } from '../Profile/Profile';
import { UserDataType } from '../Login/Login';
import { createFeedBackAction, FeedbackData } from '../../actions/feedbackAction';
import { CssTextField } from '../Profile/styledItems';
import { PageTitle } from '../Leaders/styles';
import { white } from '../../consts/colors';

export const Feedback: React.FC = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<UserDataType>();
  const onSubmit = handleSubmit((values: FeedbackData) => {
    dispatch(createFeedBackAction(values));
  });

  return (
    <PageWrapper padding="90px 150px 30px">
      <PageTitle color={white} marginTop="20px">
        Форма обратной связи
      </PageTitle>
      <TableWrapper width="40%">
        <FormInputWrapper currentMarginTop="30%" currentWidth="80%">
          <form onSubmit={onSubmit}>
            <FormControl fullWidth variant="outlined">
              <Controller
                name="name"
                as={<CssTextField id="name" label="Имя" />}
                control={control}
                rules={{
                  required: 'Required',
                }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <Controller
                name="email"
                as={<CssTextField id="email" label="email-адрес" type="email" />}
                control={control}
                rules={{
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address',
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <Controller
                name="text"
                as={<CssTextField id="text" label="Ваш отзыв" multiline />}
                control={control}
                rules={{
                  required: 'Required',
                }}
              />
            </FormControl>
            <StyledButton type="submit">
              <TextButton>Отправить</TextButton>
            </StyledButton>
          </form>
        </FormInputWrapper>
      </TableWrapper>
    </PageWrapper>
  );
};
