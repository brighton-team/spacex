import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button, withStyles } from '@material-ui/core';
import { authButtonColor, linkColor, white } from '../../consts/colors';

const FormWrapper = styled.div<{ height: string }>`
  width: 340px;
  height: ${(props) => props.height};
  background: rgba(199, 199, 199, 0.75);
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
const FormInputWrapper = styled.div<{ currentMarginTop: string; currentWidth: string }>`
  width: ${(props) => props.currentWidth};
  margin-top: ${(props) => props.currentMarginTop};
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

const StyledButton = withStyles({
  root: {
    backgroundColor: authButtonColor,
    height: '37px',
    width: '280px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-140px',
    bottom: '40px',
  },
})(Button);

const StyledButtonOauth = withStyles({
  root: {
    backgroundImage: 'url(https://yastatic.net/s3/fiji-static/_/ILFmOIJ8woHVcXPynY5R8UCSfME.svg)',
    height: '35px',
    width: '86px',
    marginBottom: '40px',
  },
})(Button);

export {
  FormWrapper,
  TitleText,
  TextLink,
  TextButton,
  FormInputWrapper,
  StyledLink,
  StyledButton,
  StyledButtonOauth,
};
