import styled from 'styled-components';

import img from 'assets/images/gameBg.jpg';

export const PageWrapper = styled.div`
  background: url(${img}) no-repeat center center;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 50px 0;
  box-sizing: border-box;
`;

export default {
  PageWrapper,
};
