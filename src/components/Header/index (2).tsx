import { ActionButton } from 'components/ActionButton';
import React from 'react'; 
import {useSelector} from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import img from 'assets/images/logo.png';
import { forum, leaders, game, profile } from 'consts/routes';
import { UserState } from '../../types/actionTypes';

interface Wrapper {
  visibility:boolean;
}
const Wrapper = styled.div<Wrapper>`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(24, 23, 67, 0.65);
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  align-items: center;
  font-family: Montserrat, serif;
  display: ${props => props.visibility? 'flex': 'none'}
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

const routesWithHeader = [forum, leaders, game, profile];

export function Header(): JSX.Element | null {
  const { pathname } = useLocation();
  const isShowHeader = routesWithHeader.includes(pathname);
  const { isVisibleHeader } = useSelector((state: UserState) => state.gameModal);

  return isShowHeader ? (
    <Wrapper visibility={isVisibleHeader}>
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
    </Wrapper>
  ) : null;
}