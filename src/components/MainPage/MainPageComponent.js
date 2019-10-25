import React from "react";
import "./MainPage.less";

import LogoComponent from "../Logo";

function MainPageComponent() {
  return (
    <main>
      <div className="container">
        <section className="intro d-flex flex-column justify-content-center">
          <div className="title">
            <div className="row d-flex justify-content-center">
              <div className="logo">
                <LogoComponent />
              </div>
              <h1 class="brend-title">JunSupport</h1>
            </div>
            <div className="row">
              <p className="sub-title m-auto">
                Материалы для подготовки к собеседованию Junior JS, React Developer<img className="logo-icon" src={require('../../images/react.png')} alt="React_logo"/>
              </p>
            </div>
          </div>
          <hr/>
          <div className="our_mateerials">
            <h2>На нашем сайте вы найдёте следующие материалы:</h2>
            <ul className="our_mateerials-list">
              <li>
                <a href="">Спсисок вопоросов и требований к разработчику по основам JS, React/Redux
                уровня Junior</a>
              </li>
              <li><a href="">Систематизирование шпоргалки</a></li>
              <li><a href="">Онлайн тест для проверки знаний по JS, React/Redux, Web протоколам</a></li>
              <li><a href="">Типовые задачи с осбеседований с решением и объяснением</a></li>
              <li><a href="">Библиография</a></li>
            </ul>
          </div>
            <a href="#materials" className="button mx-auto btn btn-danger mt-4">
              Перейти к материалам
            </a>
        </section>
      </div>
    </main>
  );
}

export default MainPageComponent;
