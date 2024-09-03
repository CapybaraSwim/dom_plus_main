import React from 'react';
import "./../style/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="img/logo.svg" alt="logo" />
      </div>
      <nav className="nav">
        <a href="#" className="nav_link">Главная</a>
        <a href="#" className="nav_link">Услуги</a>
        <a href="#" className="nav_link">Собрать свой дом</a>
        <a href="#" className="nav_link">Расчет стоимости</a>
        <a href="#" className="nav_link">О нас</a>
      </nav>
      <div className="header_button">
        <button>Оставить заявку</button>
      </div>
    </header>
  )
}
