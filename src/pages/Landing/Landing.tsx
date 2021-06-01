import React from 'react';
import { Link } from 'react-router-dom';

import { signIn, signUp } from 'consts/routes';
import './styles.css';

export const Landing = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="heading" />
      <h1 className="description" data-test="landing-description">
        У вас есть три жизни, чтобы преодолеть пояс астероидов.
        <br />
        Ваша цель - сбить как можно больше препятствий с помощью лазерной пушки и остаться живым!
      </h1>
      <div className="linksWrapper">
        <Link className="styledLink" to={signIn} data-test="signin-button">
          Вход
        </Link>
        <Link className="styledLink" to={signUp} data-test="signup-button">
          Регистрация
        </Link>
      </div>
    </div>
  );
};
