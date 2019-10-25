import React from "react";
import { NavLink  } from "react-router-dom";

import './Navbar.less'

import LogoComponent from "../Logo"

function NavbarComponent() {
  return (
    <React.Fragment>
    <div className="header-height"></div>
    <header>
      <nav className="container">
        <ul className="d-flex align-items-center"> 
          <li className="logo col-2 mr-auto">
            <LogoComponent />
          </li>
          <li>
            <NavLink exact to="/">
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/materials">
              Материалы
            </NavLink>
          </li>
          <li>
            <NavLink to="/test">
              Тест знаний
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs">
              Контактные данные
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </React.Fragment>
  );
}

export default NavbarComponent