import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';

import img from 'assets/images/gameBg.jpg';
import pause from 'assets/images/pause.png';

export const PageWrapper = styled.div`
  background: url(${img}) no-repeat center center;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 50px 20px;
  box-sizing: border-box;
`;
/*
export const PauseButton = styled.div`

`;
*/

export const PauseButton = withStyles({
  root: {
    background: `url(${pause}) no-repeat center center`,
    height: '40px',
    width: '40px',
    'background-size': 'cover',
    position: 'absolute',
    'z-index': '10000',
    top: '120px',
    left: '50px',
    'min-width': 'auto',
  },
})(Button);

export const Canvas = styled.canvas`
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  max-height: 100vh;
`;

export const Score = styled.div`
  position: absolute;
  right: 100px;
  top: 100px;
  font-size: 36px;
  color: white;
`;

export const Health = styled.div`
  position: absolute;
  right: 100px;
  top: 150px;
  font-size: 36px;
  color: white;
`;
