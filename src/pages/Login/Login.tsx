import React from 'react';

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

type LoginPageProps = {
  loaded?: boolean;
  isAuth?: boolean;
  page?: string;
};

const authWrapperHeight = '360px';
const regWrapperHeight = '650px';
const authMarginTopTitle = '50px';
const regMarginTopTitle = '30px';

export const LoginPage: React.FC<LoginPageProps> = ({ page }) => {
  // const { isAuth } = useSelector((state: UserState) => state.user);
  // const history = useHistory();
  // if (isAuth) {
  //   history.push(leaders);
  // }
  const checkLoginPage = page === 'login';
  const wrapperHeight = checkLoginPage ? authWrapperHeight : regWrapperHeight;
  const titleMarginTop = checkLoginPage ? authMarginTopTitle : regMarginTopTitle;
  const link = checkLoginPage ? signUp : signIn;
  const titleText = checkLoginPage ? 'ВХОД' : 'РЕГИСТРАЦИЯ';
  const linkText = checkLoginPage ? 'Нет аккаунта?' : 'Уже зарегистрированы?';
  const renderPage = checkLoginPage ? <LoginForm /> : <RegisterForm />;
  return (
    <HeaderWrapper>
      <FormWrapper height={wrapperHeight}>
        <TitleText marginTop={titleMarginTop}>{titleText}</TitleText>
        <FormInputWrapper currentMarginTop={titleMarginTop} currentWidth="250px">
          {renderPage}
        </FormInputWrapper>
        <StyledLink to={link}>
          <TextLink>{linkText}</TextLink>
        </StyledLink>
      </FormWrapper>
    </HeaderWrapper>
  );
};
