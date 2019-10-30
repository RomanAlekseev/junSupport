import React from "react";
import "./MainPage.less";

import LogoComponent from "../Logo";

function MainPageComponent() {
  return (
    <main>
      <div className="container">
        <section className="intro d-flex flex-column justify-content-center">
          <div className="intro__title">
            <div className="row d-flex justify-content-center">
              <div className="logo">
                <LogoComponent />
              </div>
              <h1 class="brend-title">JunSupport</h1>
            </div>
            <div className="row">
              <p className="sub-title m-auto">
                Материалы для подготовки к собеседованию Junior JS, React
                Developer
                <img
                  className="icon"
                  src={require("../../images/react.png")}
                  alt="React_logo"
                />
              </p>
            </div>
          </div>
          <hr />
          <div className="our-services">
            <h2 className="our-services__title">
              На нашем сайте вы найдёте следующие материалы:
            </h2>
            <ul className="our-services-list">
              <li className="our-services__list-item">
                <a href="#1">
                  Спсисок вопоросов и требований к разработчику по основам JS,
                  React/Redux уровня Junior
                </a>
              </li>
              <li className="our-services__list-item">
                <a href="#1">Систематизирование шпоргалки</a>
              </li>
              <li className="our-services__list-item">
                <a href="#1">
                  Онлайн тест для проверки знаний по JS, React/Redux, Web
                  протоколам
                </a>
              </li>
              <li className="our-services__list-item">
                <a href="#1">
                  Типовые задачи с собеседований с решением и объяснением
                </a>
              </li>
              <li className="our-services__list-item">
                <a href="#1">Библиография</a>
              </li>
            </ul>
          </div>
          <a
            href="#materials"
            className="our-services_button mx-auto btn btn-danger mt-4 d-flex justify-content-center align-items-center"
          >
            К материалам
            <span className="ml-2 d-flex align-items-center">
              <ion-icon name="folder-open"></ion-icon>
            </span>
          </a>
        </section>
      </div>
      <section className="about-us d-flex flex-column justify-content-center">
        <div className="container">
          <h2 class="brend-title">JunSupport</h2>
          <p className="col-md-8 mx-auto">
            JunSupport представляет из себя сборник материалов,(
            <a href="#1">вопросы</a>,<a href="#1"> требования</a>,
            <a href="#1"> задачи</a>,<a href="#1"> полезные ресурсы</a>) которые
            помогут вам подготовиться к собеседованиям на Junior Frontend
            разработчика.
            <br />
            Так же здесь вы можете проверить свои знания JS в наших
            <a href="#3"> тестах</a>.
            <br />
            Надеюсь, наш сайт даст вам проедставление о том, как проходят
            собеседования на должность Junior Developer, но ничто не заменит
            полноценного обучения, поэтому не забывайте про такие ресурсы, как
            learnJavaScript, HTML academy, CodeWars и т.д. (
            <a href="#1">смотри библиографию</a>)
          </p>
          <p className="mb-4">Успехов на собеседовании!</p>
          <hr />
          <a href="#1" className="pr-3">
            <ion-icon name="book"></ion-icon> К материалам
          </a>
          <a href="#2" className="pr-3">
            <ion-icon name="checkbox-outline"></ion-icon> К тесту
          </a>
          <a href="#3" className="pr-3">
            <ion-icon name="play"></ion-icon> Запись собеседования
          </a>
        </div>
      </section>
    </main>
  );
}

export default MainPageComponent;
