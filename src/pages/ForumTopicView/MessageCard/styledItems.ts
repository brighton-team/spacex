import styled from 'styled-components';
import { Avatar, withStyles } from '@material-ui/core';

export const Card = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 30px 30px;
  font-family: Montserrat, sans-serif;
  color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #4d5f8f;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  padding-top: 15px;
  margin-right: 35px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const StyledAvatar = withStyles({
  root: {
    background: 'transparent',
    height: '108px',
    width: '108px',
    color: '#fff',
    border: '1px solid white',
  },
})(Avatar);

export default {
  Card,
  Author,
  Content,
  StyledAvatar,
};
