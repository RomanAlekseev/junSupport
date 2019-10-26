import React from "react";
import Example from "./posts/Example";
import Example2 from "./posts/Example2";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./Materials.less";

function Materials() {
  return (
    <main id="materials">
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <nav className="materials-navigation col-2 col-md-4">
            <ul className="listOfElements">
              {/* <p>Материалы для подготовки --> Содержание:</p> */}
              <p className="d-flex justify-content-between align-items-center"><span>Меню</span><ion-icon name="menu" size="large"></ion-icon></p>
              <hr/>
              <li>
                <label for="checkbox">
                <ion-icon name="help"></ion-icon> Вопросы с собеседований/ответы
                </label>
                <input type="checkbox" id="checkbox" className="invis"/>
                <ul className="innerList">
                  <li>
                    <NavLink exact to="/materials">
                      Сколько типов данных в js
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/materials/EventLoop">
                      EventLoop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/materials/Context">
                      Контескт вызова
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li><label><ion-icon name="clipboard"></ion-icon> Требования к Junior JS Developer</label></li>
              <li><label><ion-icon name="calculator"></ion-icon> Задачи с собеседований с решением</label></li>
              <li><label><ion-icon name="bookmarks"></ion-icon> Библиография</label></li>
              <li><label><ion-icon name="play-circle"></ion-icon> Запись собеседования</label></li>
              <li><label><ion-icon name="paper"></ion-icon> Шпоргалки</label></li>
              {/* <li><label>Требования к Junior JS Developer</label></li>
              <li><label>Задачи с собеседований с решением</label></li>
              <li><label>Библиография</label></li>
              <li><label>Задачи с собеседований с решением</label></li>
              <li><label>Библиография</label></li>
              <li><label>Задачи с собеседований с решением</label></li>
              <li><label>Библиография</label></li>
              <li><label>Задачи с собеседований с решением</label></li>
              <li><label>Библиография</label></li>
              <li><label>Задачи с собеседований с решением</label></li>
              <li><label>Библиография</label></li> */}
            </ul>
          </nav>
          <Route exact path="/materials" component={Example} />
          <Route path="/materials/EventLoop" component={Example} />
          <Route exact path="/materials/Context" component={Example2} />
        </div>
      </div>
    </main>
  );
}

export default Materials;
