import styled from 'styled-components';
import { gobackLinkColor, white } from '../../consts/colors';




const HeaderWrapper = styled.div`
  background:  no-repeat center center;
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
  width:170px;
`;
const ErrorNumber = styled.div<{ color: string }>`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: 130px;
  line-height: 130px;
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
  margin-bottom:10px;
  white-space:nowrap;
  color: ${white};
`;

export {
  HeaderWrapper,
  TextWrapper,
  TextLink,
  ErrorNumber,
  Message,
};
