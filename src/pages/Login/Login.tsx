import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { Button, TextField, FormControl, withStyles } from '@material-ui/core';

import { linkColor, authButtonColor, white } from 'consts/colors';
import { signUp } from 'consts/routes';

import img from 'pages/Login/img/loginback.png';
import { Header } from 'components/Header';

const HeaderWrapper = styled.div`
  background: url(${img}) no-repeat center center;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
`;
const FormWrapper = styled.div`
  width: 340px;
  height: 450px;
  background: rgba(209, 199, 255, 0.75);
  border-radius: 12px;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const TitleText = styled.span`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-top: 50px;
`;
const TextLink = styled.span`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 11px;
  color: ${linkColor};
`;
const TextButton = styled.span`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${white};
`;
const FormInputWrapper = styled.div`
  width: 280px;
  margin-top: 40px;
`;

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

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 90px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

type FormData = {
  login: string;
  password: string;
};

export const LoginPage: React.FC = () => {
  const { control, handleSubmit, errors: fieldsErrors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ login, password }) => {
    console.log('login:', login, 'password:', password);
  });
  return (
    <HeaderWrapper>
      <Header />
      <FormWrapper>
        <TitleText>ВХОД</TitleText>
        <FormInputWrapper>
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
              <TextButton>АВТОРИЗОВАТЬСЯ</TextButton>
            </StyledButton>
          </form>
        </FormInputWrapper>
        <StyledLink to={signUp}>
          <TextLink>Нет аккаунта?</TextLink>
        </StyledLink>
      </FormWrapper>
    </HeaderWrapper>
  );
};
