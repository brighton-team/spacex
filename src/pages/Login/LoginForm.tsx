import React from 'react';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';

import { FormControl, TextField } from '@material-ui/core';

import { SIGN_IN_URL } from 'consts/routes';
import { IUser } from 'types/actionTypes';
import { StyledButton, TextButton } from './styles';

export const LoginForm: React.FC = () => {
  const { control, handleSubmit, errors: fieldsErrors } = useForm<IUser>();
  const onSubmit = handleSubmit((values) => {
    axios.post(SIGN_IN_URL, values).then((response) => {
      if (response.status === 200) {
        console.log('values', values);
      }
    });
  });
  return (
    <form onSubmit={onSubmit}>
      <FormControl fullWidth variant="outlined">
        <Controller
          name="login"
          as={
            <TextField
              id="login"
              helperText={fieldsErrors.login ? fieldsErrors.login.message : null}
              label="Login"
              error={Boolean(fieldsErrors.login)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: 'Required',
            pattern: {
              value: /[0-9a-zA-Z]{6,20}/g,
              message: 'invalid value from 6 to 20 letters or numbers',
            },
          }}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <Controller
          name="password"
          as={
            <TextField
              id="password"
              helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
              label="Password"
              type="password"
              error={Boolean(fieldsErrors.password)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: 'Required',
            pattern: {
              value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
              message: 'invalid value',
            },
          }}
        />
      </FormControl>
      <StyledButton type="submit">
        <TextButton>ВХОД</TextButton>
      </StyledButton>
    </form>
  );
};
