import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormControl, TextField } from '@material-ui/core';
import { FormData } from 'pages/Login/Login';
import { signUpAction } from 'actions/signInActions';
import { useDispatch } from 'react-redux';
import { StyledButton, TextButton } from './styles';

export const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { control, watch, handleSubmit, errors: fieldsErrors } = useForm<FormData>();
  const onSubmit = handleSubmit((values) => {
    dispatch(signUpAction(values));
  });
  const password = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  password.current = watch('password', '');
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
          name="email"
          as={
            <TextField
              id="email"
              helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
              label="Email"
              type="email"
              error={Boolean(fieldsErrors.email)}
            />
          }
          control={control}
          defaultValue=""
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
          name="first_name"
          as={
            <TextField
              id="firstName"
              helperText={fieldsErrors.first_name ? fieldsErrors.first_name.message : null}
              label="FirstName"
              error={Boolean(fieldsErrors.first_name)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: 'Required',
            pattern: {
              value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
              message: 'invalid value',
            },
          }}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <Controller
          name="second_name"
          as={
            <TextField
              id="lastName"
              helperText={fieldsErrors.second_name ? fieldsErrors.second_name.message : null}
              label="LastName"
              error={Boolean(fieldsErrors.second_name)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: 'Required',
            pattern: {
              value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
              message: 'invalid value',
            },
          }}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <Controller
          name="phone"
          as={
            <TextField
              id="phoneNumber"
              helperText={fieldsErrors.phone ? fieldsErrors.phone.message : null}
              label="PhoneNumber"
              error={Boolean(fieldsErrors.phone)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: 'Required',
            pattern: {
              value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
              message: 'invalid value',
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
      <FormControl fullWidth variant="outlined">
        <Controller
          name="password_confirm"
          as={
            <TextField
              id="confirmPassword"
              type="password"
              helperText={
                fieldsErrors.password_confirm ? fieldsErrors.password_confirm.message : null
              }
              label="Confirm Password"
              error={Boolean(fieldsErrors.password_confirm)}
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
            validate: (value) => value === password.current || 'The passwords do not match',
          }}
        />
      </FormControl>
      <StyledButton type="submit">
        <TextButton>ЗАРЕГИСТРИРОВАТЬСЯ</TextButton>
      </StyledButton>
    </form>
  );
};
