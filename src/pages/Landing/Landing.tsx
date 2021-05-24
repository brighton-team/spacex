import React from 'react';
import { Link } from 'react-router-dom';

import { signIn, signUp } from 'consts/routes';
import './styles.css';

export const Landing = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="heading" />
      <h1 className="description">
        У вас есть три жизни, чтобы преодолеть пояс астероидов.
        <br />
        Ваша цель - сбить как можно препятствий с помощью лазерной пушки и остаться живым!
      </h1>
      <div className="linksWrapper">
        <Link className="styledLink" to={signIn}>
          Вход
        </Link>
        <Link className="styledLink" to={signUp}>
          Регистрация
        </Link>
      </div>
    </div>
  );
};
