import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.less";

import LogoComponent from "../Logo";

function NavbarComponent() {
  return (
    <header>
      <nav className="container">
        <ul className="d-flex px-0 align-items-center navbar">
          <li
            className="logo col-12 col-md-2 mr-auto navbar__item navbar__item_logo"
            title="JunSupport"
          >
            <LogoComponent />
          </li>
          <li className="navbar__item">
            <NavLink exact to="/">
              <span className="link-text">О нас</span>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/materials">
              <ion-icon name="book"></ion-icon>
              <span className="link-text">Материалы</span>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/tests">
              <ion-icon name="checkbox-outline"></ion-icon>
              <span className="link-text">Тест знаний</span>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contactUs">
              <ion-icon name="contact"></ion-icon>
              <span className="link-text">Контактные данные</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;
