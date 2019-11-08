import React, { useRef, Component } from "react";
import "./MainPage.less";
import CodeExample from "../Materials/CodeExample";

import LogoComponent from "../Logo";

class MainPageComponent extends Component {
  // const refFirstService = useRef(0);
  // const refSecondService = useRef(1);
  // const refThirdService = useRef(2);
  // const refFourthService = useRef(3);
  // const refFiveService = useRef(4);
  constructor(props) {
    super(props);

    this.refFirstService = React.createRef();
    this.refSecondService = React.createRef();
    this.refThirdService = React.createRef();
    this.refFourthService = React.createRef();
    this.refFiveService = React.createRef();
  }

  animateElemInVieport = () => {
    const top = this.refFirstService.current.offsetTop;
    const top2 = this.refSecondService.current.offsetTop;
    const top3 = this.refThirdService.current.offsetTop;
    const top4 = this.refFourthService.current.offsetTop;
    const top5 = this.refFiveService.current.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset + 200 >= top) {
        //console.log("in viewport");
        if (!this.refFirstService.current.classList.contains("animate")) {
          this.refFirstService.current.classList.add("animate");
        }
      }
      if (window.pageYOffset + 600 >= top2) {
        //console.log("in viewport");
        if (!this.refSecondService.current.classList.contains("animate")) {
          this.refSecondService.current.classList.add("animate");
        }
      }
      if (window.pageYOffset + 700 >= top3) {
        //console.log("in viewport");
        if (
          this.refThirdService.current &&
          !this.refThirdService.current.classList.contains("animate")
        ) {
          this.refThirdService.current.classList.add("animate");
        }
      }

      if (window.pageYOffset + 500 >= top4) {
        //console.log("in viewport");
        if (!this.refFourthService.current.classList.contains("animate")) {
          this.refFourthService.current.classList.add("animate");
        }
      }

      if (window.pageYOffset + 500 >= top5) {
        //console.log("in viewport");
        if (!this.refFiveService.current.classList.contains("animate")) {
          this.refFiveService.current.classList.add("animate");
        }
      }
      //console.log(top);
    });
    // if (window.pageYOffset > top) console.log("in viewport");
    // console.log(top);
  };

  componentDidMount() {
    this.animateElemInVieport();
    // console.log(
    //   this.refFirstService.current.classList.add("xxxxxxxxxxxxxxxxxxxxxxxxxx");
    // );
  }

  render() {
    return (
      <main>
        <div className="container-fluid">
          <section className="intro d-flex flex-column justify-content-center">
            <div className="intro__title">
              <div className="row d-flex justify-content-center">
                <div className="logo">
                  <LogoComponent />
                </div>
                <h1 className="brend-title">JunSupport</h1>
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
            {/* <div className="our-services">
            <h2 className="our-services__title">
              На нашем сайте вы найдёте следующие материалы:
            </h2>
            <ul className="our-services-list">
              <li className="our-services__list-item">
                <a href="#1">
                  Вопоросы и требования к разработчику JS, React/Redux уровня
                  Junior
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
          </div> */}
            <div className="row d-flex justify-content-center">
              <a
                href="#materials"
                className="our-services_button mr-5 btn btn-danger mt-4 d-flex justify-content-center align-items-center"
              >
                К материалам
                <span className="ml-2 d-flex align-items-center">
                  <ion-icon name="folder-open"></ion-icon>
                </span>
              </a>

              <a
                href="#materials"
                className="our-services_button btn btn-primary mt-4 d-flex justify-content-center align-items-center"
              >
                К тестам знаний
                <span className="ml-2 d-flex align-items-center"></span>
              </a>
            </div>
          </section>
        </div>
        <section className="about-us d-flex flex-column justify-content-center">
          <div className="container">
            {/* <h2 class="brend-title">JunSupport</h2>
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
          </a> */}
            <div className="service-presentation" ref={this.refFirstService}>
              <h3>
                Готовьтесь к собеседованию c
                <span className="brend-title"> JunSupport</span> !
              </h3>
            </div>
            <div className="service-presentation" ref={this.refSecondService}>
              <div className="row col-md-12 justify-content-center">
                <div className="service-presentation__content col-md-6">
                  <div className="service-presentation__title">
                    Разбирайте вопросы с собеседований
                  </div>
                </div>
                <div className="service-presentation__service-example">
                  <ul>
                    <li>Сколько типов данных в JS?</li>
                    <li>Что такое Execution Context?</li>
                    <li>Что такое Lexical Environment?</li>
                    <li>Расскажите о Event Loop?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-presentation" ref={this.refThirdService}>
              <div className="row col-md-12 justify-content-center">
                <div className="service-presentation__code">
                  <CodeExample />
                </div>
                <div className="service-presentation__content col-md-4">
                  <div className="service-presentation__title">
                    Решайте задачи
                  </div>
                </div>
              </div>
            </div>

            <div className="service-presentation" ref={this.refFourthService}>
              <div className="row col-md-12 justify-content-center">
                <div
                  className="service-presentation__content col-md-7"
                  id="test_tt"
                >
                  <div className="service-presentation__title">
                    Проходите тесты
                  </div>
                </div>
                <div className="service-presentation__service-example">
                  <ul className="service-presentation__test">
                    <p className="quest">Сколько типов данных в JS</p>
                    {/* <li>Сколько типов данных в JS?</li> */}
                    <li>Что такое Execution Context?</li>
                    <li>
                      <span></span> Что такое Lexical Environment?
                    </li>
                    <li>Расскажите о Event Loop?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-presentation" ref={this.refFiveService}>
              <div className="row col-md-12 justify-content-center">
                <div className="service-presentation__content col-md-6">
                  <div className="service-presentation__title pb-5">
                    Прослушайте записи собеседований
                  </div>
                </div>
                <div>
                  <iframe
                    title="собеседование"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Inerf4ggoaU"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default MainPageComponent;
