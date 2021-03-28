import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, FormControl, withStyles } from '@material-ui/core';

import { authButtonColor } from 'consts/colors';
import { signUp, signIn } from 'consts/routes';
import { useLocation } from 'react-router-dom';
import {
  FormInputWrapper,
  FormWrapper,
  HeaderWrapper,
  TextButton,
  TextLink,
  TitleText,
  StyledLink,
} from './styles';

const StyledButton = withStyles({
  root: {
    backgroundColor: authButtonColor,
    height: '37px',
    width: '280px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-140px',
    bottom: '40px',
  },
})(Button);

type FormData = {
  email?: string;
  login: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  password: string;
  confirmPassword?: string;
};

type PagesType = {
  [key: string]: string;
};

const loginPage = 'login';
const registerPage = 'register';
const authWrapperHeight = '360px';
const regWrapperHeight = '650px';
const authMarginTopTitle = '50px';
const regMarginTopTitle = '30px';

const pages: PagesType = {
  [signIn]: loginPage,
  [signUp]: registerPage,
  default: loginPage,
};

const getPage = (path: string): string => (path.length === 1 ? pages.default : pages[path]);
const isLoginPage = (pageName: string): boolean => pageName === loginPage;

export const LoginPage: React.FC = () => {
  const { control, handleSubmit, watch, errors: fieldsErrors } = useForm<FormData>();
  const password = useRef({});
  password.current = watch('password', '');
  const { pathname }: { pathname: string } = useLocation();
  const currentPage = getPage(pathname);
  const checkLoginPage = isLoginPage(currentPage);
  const wrapperHeight = checkLoginPage ? authWrapperHeight : regWrapperHeight;
  const titleMarginTop = checkLoginPage ? authMarginTopTitle : regMarginTopTitle;
  const link = checkLoginPage ? signUp : signIn;
  const onSubmit = handleSubmit((values) => {
    console.log('values:', values);
  });
  return (
    <HeaderWrapper>
      <FormWrapper height={wrapperHeight}>
        <TitleText marginTop={titleMarginTop}>{checkLoginPage ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</TitleText>
        <FormInputWrapper marginTop={titleMarginTop}>
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
            {!checkLoginPage && (
              <>
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
                    name="firstName"
                    as={
                      <TextField
                        id="firstName"
                        helperText={fieldsErrors.firstName ? fieldsErrors.firstName.message : null}
                        label="FirstName"
                        error={Boolean(fieldsErrors.firstName)}
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
                    name="lastName"
                    as={
                      <TextField
                        id="lastName"
                        helperText={fieldsErrors.lastName ? fieldsErrors.lastName.message : null}
                        label="LastName"
                        error={Boolean(fieldsErrors.lastName)}
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
                    name="phoneNumber"
                    as={
                      <TextField
                        id="phoneNumber"
                        helperText={
                          fieldsErrors.phoneNumber ? fieldsErrors.phoneNumber.message : null
                        }
                        label="PhoneNumber"
                        error={Boolean(fieldsErrors.phoneNumber)}
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
              </>
            )}
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
            {!checkLoginPage && (
              <FormControl fullWidth variant="outlined">
                <Controller
                  name="confirmPassword"
                  as={
                    <TextField
                      id="confirmPassword"
                      type="password"
                      helperText={
                        fieldsErrors.confirmPassword ? fieldsErrors.confirmPassword.message : null
                      }
                      label="Confirm Password"
                      error={Boolean(fieldsErrors.confirmPassword)}
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
            )}
            <StyledButton type="submit">
              <TextButton>{checkLoginPage ? 'АВТОРИЗОВАТЬСЯ' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}</TextButton>
            </StyledButton>
          </form>
        </FormInputWrapper>
        <StyledLink to={link}>
          <TextLink>{checkLoginPage ? 'Нет аккаунта?' : 'Уже зарегистрированы?'}</TextLink>
        </StyledLink>
      </FormWrapper>
    </HeaderWrapper>
  );
};
