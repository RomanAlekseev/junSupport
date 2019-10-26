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
                Материалы для подготовки к собеседованию Junior JS, React
                Developer
                <img
                  className="logo-icon"
                  src={require("../../images/react.png")}
                  alt="React_logo"
                />
              </p>
            </div>
          </div>
          <hr />
          <div className="our_mateerials">
            <h2>На нашем сайте вы найдёте следующие материалы:</h2>
            <ul className="our_mateerials-list">
              <li>
                <a href="">
                  Спсисок вопоросов и требований к разработчику по основам JS,
                  React/Redux уровня Junior
                </a>
              </li>
              <li>
                <a href="">Систематизирование шпоргалки</a>
              </li>
              <li>
                <a href="">
                  Онлайн тест для проверки знаний по JS, React/Redux, Web
                  протоколам
                </a>
              </li>
              <li>
                <a href="">
                  Типовые задачи с осбеседований с решением и объяснением
                </a>
              </li>
              <li>
                <a href="">Библиография</a>
              </li>
            </ul>
          </div>
          <a
            href="#materials"
            className="button mx-auto btn btn-danger mt-4 d-flex justify-content-center align-items-center"
          >
            К материалам{" "}
            <span className="ml-2 d-flex align-items-center">
              <ion-icon name="folder-open"></ion-icon>
            </span>
          </a>
        </section>
      </div>
      <section className="intro d-flex flex-column justify-content-center">
        <div className="container">
          <h2 class="brend-title">JunSupport</h2>
          <p>
            Сайт JunSupport создан для тех, кто собирается стать веб
            разработчиком(JS), возможно вы уже прошли обучающие курсы по
            вёрстки, оснвам JS, JQuery, но ёще не имеете опыта реальных
            собеседований?
            <br />
            Наш сайт создан специально для тех кому первые собеседования ещё
            только предстоят
            <br />
            JunSupport представляет из себя сборник материалов(вопросы,
            требования, задачи, полезные ресурсы) которые накопились у меня в
            процессе подготовки к собеседованию.
            <br />
            так же здесь вы можете пройти тест, в котором я посторался
            симиитировать вопросы с реального собеедования.
            <br />
            Надеюсь наш сайт даст вам минимальное проедставление о том как
            проходят собеседование на Junior Developer, но ничто не заменит
            полноценного обучения поэтому не забывайте про learnJavaScript, HTML
            academy, CodeWars и т.д.(смотри библиографию)
          </p>
          <p>Успехов на собеседовании!</p>
          <hr/>
          <a href="#">
            <ion-icon name="book"></ion-icon> К материалам
          </a>
          <a href="#">
            <ion-icon name="checkbox-outline"></ion-icon> К тесту
          </a>
          <a href="#">
            <ion-icon name="play"></ion-icon> Запись собеседования
          </a>
        </div>
      </section>
    </main>
  );
}

export default MainPageComponent;
