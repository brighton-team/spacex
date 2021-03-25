import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, FormControl, withStyles } from '@material-ui/core';

import { authButtonColor } from 'consts/colors';
import { signUp, signIn } from 'consts/routes';
import { useLocation } from 'react-router';
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
    bottom: '120px',
  },
})(Button);

type FormData = {
  email: string;
  login: string;
  password: string;
};

type PagesType = {
  [key: string]: string;
};

const loginPage = 'login';
const registerPage = 'register';
const authWrapperHeight = '450px';
const regWrapperHeight = '650px';

const pages: PagesType = {
  [signIn]: loginPage,
  [signUp]: registerPage,
  default: loginPage,
};

const getPage = (path: string): string => (path.length === 1 ? pages.default : pages[path]);
const isLoginPage = (pageName: string): boolean => pageName === loginPage;

export const LoginPage: React.FC = () => {
  const { control, handleSubmit, errors: fieldsErrors } = useForm<FormData>();
  const { pathname }: { pathname: string } = useLocation();
  const currentPage = getPage(pathname);
  const checkLoginPage = isLoginPage(currentPage);
  const wrapperHeight = checkLoginPage ? authWrapperHeight : regWrapperHeight;
  const link = checkLoginPage ? signUp : signIn;
  const onSubmit = handleSubmit(({ email, login, password }) => {
    console.log('email:', email, 'login:', login, 'password:', password);
  });
  return (
    <HeaderWrapper>
      <FormWrapper height={wrapperHeight}>
        <TitleText>{checkLoginPage ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</TitleText>
        <FormInputWrapper>
          <form onSubmit={onSubmit}>
            <FormControl fullWidth variant="outlined">
              <Controller
                name="email"
                as={
                  <TextField
                    id="email"
                    helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
                    label="Email"
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
                    error={Boolean(fieldsErrors.password)}
                  />
                }
                control={control}
                defaultValue=""
                rules={{
                  required: 'Required',
                }}
              />
            </FormControl>
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
