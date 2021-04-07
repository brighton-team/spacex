import { ActionButton } from 'components/ActionButton';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import img from 'assets/images/logo.png';
import { signIn, signUp, forum, leaders, game, error, profile } from 'consts/routes';

const Wraper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(24, 23, 67, 0.65);
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: Montserrat, serif;
`;

const Content = styled.div`
  width: 100%;
  height: 33px;
  padding: 0 50px;
`;
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

const HeaderButton = styled.div`
  position: absolute;
  left: 180px;
`;

const routesWithoutHeader = ['/', signIn, signUp, error];

export function Header(): JSX.Element | null {
  const { pathname } = useLocation();

  if (routesWithoutHeader.includes(pathname)) {
    return null;
  }

  return (
    <Wraper>
      <Content>
        <Logo />
        <HeaderButton>
          <Link to={game}>
            <ActionButton>Играть</ActionButton>
          </Link>
        </HeaderButton>
        <TopLinks>
          <StyledLink to={leaders}>Лидеры</StyledLink>
          <StyledLink to={forum}>Форум</StyledLink>
          <StyledLink to={profile}>Профиль</StyledLink>
        </TopLinks>
      </Content>
    </Wraper>
  );
}
