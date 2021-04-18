import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImage from 'assets/images/loginBg.png';
import logo from 'assets/images/logo.png';

export const PageWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${bgImage}) no-repeat center center;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 190px 50px 20px;
  box-sizing: border-box;
`;

export const Description = styled.h1`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
  margin-bottom: 50px;
  max-width: 1000px;
  line-height: 28px;
`;

export const Heading = styled.div`
  width: 100%;
  height: 90px;
  background: url(${logo}) no-repeat center center;
  background-size: contain;
  margin-bottom: 40px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 650px;
`;

export const StyledLink = styled(Link)`
  width: 280px;
  height: 45px;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  text-align: center;
  background: transparent;
  border-color: #fff;
  border-radius: 4px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
`;
