import styled from 'styled-components';

import img from 'assets/images/gameBg.jpg';

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

export const Canvas = styled.canvas`
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 100%;
  height: 100%;
  max-width: 1400;
  max-height: 100vh;
`;
