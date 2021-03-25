import { ActionButton } from 'components/ActionButton';
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const Wraper = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  background: rgba(24, 23, 67, 0.65);
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: Montserrat;
`;

const Content = styled.div`
  width: 100%;
  height: 33px;
  padding: 0 50px;
`;

import img from 'components/Header/logo.png';
const Logo = styled.div`
  position: absolute;
  background: url(${img});
  width: 115px;
  height: 33px;
`;
const TopLinks = styled.div`
  float: right;
  height: 33px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  margin-left: 50px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
`;

export function Header(): JSX.Element {
  return (
    <Wraper>
      <Content>
        <Logo />
        <ActionButton customClass="header__content_button">Играть</ActionButton>
        <TopLinks>
          <BrowserRouter>
            <StyledLink to="/leaders">Лидеры</StyledLink>
            <StyledLink to="/forum">Форум</StyledLink>
            <StyledLink to="/profile">Профиль</StyledLink>
          </BrowserRouter>
        </TopLinks>
      </Content>
    </Wraper>
  );
}
