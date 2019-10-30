import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.less";

import LogoComponent from "../Logo";

function NavbarComponent() {
  return (
    <header>
      <nav className="container-fluid">
        <ul className="d-flex px-0 align-items-center navbar">
          <li
            className="logo col-2 mr-auto navbar__item navbar__item_logo"
            title="JunSupport"
          >
            <LogoComponent />
          </li>
          <li className="navbar__item">
            <NavLink exact to="/">
              О нас
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/materials">
              <ion-icon name="book"></ion-icon> Материалы
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/test">
              <ion-icon name="checkbox-outline"></ion-icon> Тест знаний
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contactUs">
              <ion-icon name="contact"></ion-icon> Контактные данные
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;
