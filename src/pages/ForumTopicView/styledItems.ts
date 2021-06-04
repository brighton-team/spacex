import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';

export const PageWrapper = styled.div<{ img: string }>`
  background: url(${(props) => props.img}) no-repeat center center;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 70px 0;
  box-sizing: border-box;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
  /* margin-top: 50px; */
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(24, 24, 24, 0.8);
  border-radius: 7px;
  margin-top: 20px;
  overflow-y: scroll;
`;

export const StyledLink = styled(Link)`
  width: 280px;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  text-align: left;
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
  StyledLink,
  TableWrapper,
  SubmitButton,
};
