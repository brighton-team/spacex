import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { gobackLinkColor, white } from '../../consts/colors';

enum FontSizes {
  small = '60px',
  large = '130px',
}

const HeaderWrapper = styled.div`
  background: no-repeat center center;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
`;
const TextWrapper = styled.div`
  margin-left: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 170px;
`;
const ErrorNumber = styled.div<{ color: string; errorSize?: 'small' | 'large' }>`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: ${(props) => (props.errorSize ? FontSizes[props.errorSize] : FontSizes.large)};
  text-align: center;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  color: ${(props) => props.color};
`;
const TextLink = styled.a`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  color: ${gobackLinkColor};
`;
const Message = styled.div`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  white-space: nowrap;
  color: ${white};
`;

const StyledButton = withStyles({
  root: {
    background: 'transparent',
    height: '37px',
    width: '280px',
    color: '#fff',
    borderColor: '#fff',
  },
})(Button);

export { HeaderWrapper, TextWrapper, TextLink, ErrorNumber, Message, StyledButton };
