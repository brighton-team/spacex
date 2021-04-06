import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img from 'assets/images/loginBg.png';

import { linkColor, white } from '../../consts/colors';

const HeaderWrapper = styled.div`
  background: url(${img}) no-repeat center center;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
`;
const FormWrapper = styled.div<{ height: string }>`
  width: 340px;
  height: ${(props) => props.height};
  background: rgba(209, 199, 255, 0.75);
  border-radius: 12px;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const TitleText = styled.span<{ marginTop: string }>`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-top: ${(props) => props.marginTop};
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
const FormInputWrapper = styled.div<{ marginTop: string }>`
  width: 280px;
  margin-top: ${(props) => props.marginTop};
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 15px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export {
  HeaderWrapper,
  FormWrapper,
  TitleText,
  TextLink,
  TextButton,
  FormInputWrapper,
  StyledLink,
};
