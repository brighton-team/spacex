import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';

import img from 'assets/images/rocketBg.jpg';

export const PageWrapper = styled.div<{ padding?: string }>`
  background: url(${img}) no-repeat center center;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.h1`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
`;

export const TableWrapper = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '100%'};
  height: 100%;
  background: rgba(24, 23, 67, 0.9);
  border-radius: 7px;
  margin-top: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptySpace = styled.div`
  width: 280px;
  height: 37px;
`;

export const StyledButton = withStyles({
  root: {
    background: 'transparent',
    height: '37px',
    width: '280px',
    color: '#fff',
    borderColor: '#fff',
  },
})(Button);

export const SubmitButton = withStyles({
  root: {
    background: 'transparent',
    height: '37px',
    width: '280px',
    color: '#221749',
    borderColor: '#221749',
    marginTop: 10,
  },
})(Button);

export default {
  PageWrapper,
  Heading,
  TitleText,
  StyledButton,
  EmptySpace,
  TableWrapper,
  SubmitButton,
};
