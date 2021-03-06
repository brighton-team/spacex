import { ActionButton } from 'components/ActionButton';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import img from 'assets/images/logo.png';
import { forum, leaders, game, profile, feedback } from 'consts/routes';
import { useSelector } from 'react-redux';
import { UserState } from 'types/actionTypes';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(24, 24, 24, 0.65);
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

const routesWithHeader = [forum, leaders, game, profile, feedback];

export function Header(): JSX.Element | null {
  const { pathname } = useLocation();
  const { fullscreenOn } = useSelector((state: UserState) => state.fullscreen);
  const isShowHeader = routesWithHeader.includes(pathname) || pathname.startsWith(forum);

  return isShowHeader && !fullscreenOn ? (
    <Wrapper data-test="header">
      <Content>
        <Logo data-test="logo" />
        <HeaderButton>
          <Link to={game} data-test="play-button">
            <ActionButton>Играть</ActionButton>
          </Link>
        </HeaderButton>
        <TopLinks>
          <StyledLink to={leaders} data-test="leaders-button">
            Лидеры
          </StyledLink>
          <StyledLink to={forum} data-test="forum-button">
            Форум
          </StyledLink>
          <StyledLink to={profile} data-test="profile-button">
            Профиль
          </StyledLink>
          <StyledLink to={feedback} data-test="feedback-button">
            Обратная связь
          </StyledLink>
        </TopLinks>
      </Content>
    </Wrapper>
  ) : null;
}
