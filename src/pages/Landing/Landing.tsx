import React from 'react';

import { signIn, signUp } from 'consts/routes';

import { PageWrapper, Heading, Description, LinksWrapper, StyledLink } from './styledItems';

export const Landing = (): JSX.Element => {
  return (
    <PageWrapper>
      <Heading />
      <Description>
        У вас есть три жизни, чтобы преодолеть пояс астероидов.
        <br />
        Ваша цель - сбить как можно препятствий с помощью лазерной пушки и остаться живым!
      </Description>
      <LinksWrapper>
        <StyledLink to={signIn}>Вход</StyledLink>
        <StyledLink to={signUp}>Регистрация</StyledLink>
      </LinksWrapper>
    </PageWrapper>
  );
};
