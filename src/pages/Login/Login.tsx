import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { TextField, FormControl } from '@material-ui/core';

import { signInAction, signUpAction } from 'actions/signInActions';
import { signUp, signIn, leaders } from 'consts/routes';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from 'types/actionTypes';
import {
  FormInputWrapper,
  FormWrapper,
  HeaderWrapper,
  TextButton,
  TextLink,
  TitleText,
  StyledLink,
  StyledButton,
} from './styles';

export type FormData = {
  id?: number | null;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  password?: string;
  password_confirm?: string;
};

type PagesType = {
  [key: string]: string;
};

type LoginPageProps = {
  loaded: boolean;
  isAuth: boolean;
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

export const LoginPage: React.FC<LoginPageProps> = () => {
  const { isAuth } = useSelector((state: UserState) => state.user);
  const history = useHistory();
  if (isAuth) {
    history.push(leaders);
  }
  const { control, handleSubmit, watch, errors: fieldsErrors } = useForm<FormData>();
  const dispatch = useDispatch();
  const password = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  password.current = watch('password', '');
  const { pathname }: { pathname: string } = useLocation();
  const currentPage = getPage(pathname);
  const checkLoginPage = isLoginPage(currentPage);
  const wrapperHeight = checkLoginPage ? authWrapperHeight : regWrapperHeight;
  const titleMarginTop = checkLoginPage ? authMarginTopTitle : regMarginTopTitle;
  const link = checkLoginPage ? signUp : signIn;
  const onSubmit = handleSubmit((values) => {
    if (checkLoginPage) {
      dispatch(signInAction(values));
    } else {
      dispatch(signUpAction(values));
    }
  });
  return (
    <HeaderWrapper>
      <FormWrapper height={wrapperHeight}>
        <TitleText marginTop={titleMarginTop}>{checkLoginPage ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</TitleText>
        <FormInputWrapper marginTop={titleMarginTop} width="280px">
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
                    name="first_name"
                    as={
                      <TextField
                        id="firstName"
                        helperText={
                          fieldsErrors.first_name ? fieldsErrors.first_name.message : null
                        }
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
                        helperText={
                          fieldsErrors.second_name ? fieldsErrors.second_name.message : null
                        }
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

// const mapStateToProps = ({ user }: { user: IUser }) => ({
//   isAuth: user.isAuth,
// });

// export const LoginPage = connect(mapStateToProps, { signInAction })(Login);
