import './Header.css';
import ActionButton from 'components/ActionButton/ActionButton';
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo" />
        <ActionButton customClass="header__content_button">Играть</ActionButton>
        <div className="toplinks">
          <BrowserRouter>
            <Link to="/leaders" className="toplinks__link">
              Лидеры
            </Link>
            <Link to="/forum" className="toplinks__link">
              Форум
            </Link>
            <Link to="/profile" className="toplinks__link">
              Профиль
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
