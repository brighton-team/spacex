import React from 'react';
import { useLocation } from 'react-router-dom';

import { signUp, signIn } from 'consts/routes';
import {
  FormInputWrapper,
  FormWrapper,
  HeaderWrapper,
  TextLink,
  TitleText,
  StyledLink,
} from './styles';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

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
  const { pathname } = useLocation();
  const currentPage = getPage(pathname);
  const checkLoginPage = isLoginPage(currentPage);
  const wrapperHeight = checkLoginPage ? authWrapperHeight : regWrapperHeight;
  const titleMarginTop = checkLoginPage ? authMarginTopTitle : regMarginTopTitle;
  const link = checkLoginPage ? signUp : signIn;
  return (
    <HeaderWrapper>
      <FormWrapper height={wrapperHeight}>
        <TitleText marginTop={titleMarginTop}>{checkLoginPage ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</TitleText>
        <FormInputWrapper marginTop={titleMarginTop}>
          {checkLoginPage ? <LoginForm /> : <RegisterForm />}
        </FormInputWrapper>
        <StyledLink to={link}>
          <TextLink>{checkLoginPage ? 'Нет аккаунта?' : 'Уже зарегистрированы?'}</TextLink>
        </StyledLink>
      </FormWrapper>
    </HeaderWrapper>
  );
};
