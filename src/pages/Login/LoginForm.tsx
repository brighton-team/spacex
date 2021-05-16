import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormControl, TextField } from '@material-ui/core';
import { UserDataType } from 'pages/Login/Login';
import { useDispatch } from 'react-redux';
import { signInAction } from 'actions/signInActions';
import { StyledButton, TextButton, StyledButtonOauth } from './styles';
import { ApiServiceInstance } from 'utils/ApiService/ApiService';

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors: fieldsErrors } = useForm<UserDataType>();
  const onSubmit = handleSubmit((values) => {
    dispatch(signInAction(values));
  });

  const oauth = () => {
    ApiServiceInstance.getCodeOAuth();
  };

  return (
    <div>
      <StyledButtonOauth onClick={oauth} />
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
    </div>
  );
};
