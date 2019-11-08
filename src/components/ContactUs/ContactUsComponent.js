import React from "react";

import LogoComponent from "../Logo";
import Singleton from "../../services/api-clients";
import "./ContactUs.less";

const apiClient = Singleton.makeClient();

function ContactUsComponent() {
  const sendMail = e => {
    e.preventDefault();
    let form = document.forms[0];
    let author = form.elements.author.value;
    let message = form.elements.message.value;

    const option = {
      queryParams: {
        author: author,
        message: message
      }
    };
    apiClient
      .makeRequest("sendmail", option)
      .then(() => {
        alert("Сообщение отпраленно!");
      })
      .catch(e => alert(e.message));
  };
  return (
    <main className="OurProject container">
      <div className="row">
        <div className="our col-md-9">
          <h1 className="mt-5">О проекте</h1>
          <p className="mt-4">
            Сайт запущен в 2019 году. Его цель собрать интересные примеры
            вопросов и задач которые помогли бы начинающему фронтенд
            разработчику пройти собеседование. Код сайта находится в открытом
            доступе.
            <a href="#4"> https://github.com/RomanAlekseev/junSupport</a>
            <ul className="mt-3">
              <li>
                <img
                  className="icon"
                  src={require("../../images/vk-256x256.png")}
                  alt="React_logo"
                />
                <a href="#4"> https://github.com/RomanAlekseev/junSupport</a>
              </li>
              <li className="ml-5">
                <img
                  className="icon"
                  src={require("../../images/Telegram_Messenger.png")}
                  alt="React_logo"
                />
                <a href="#4"> https://github.com/RomanAlekseev/junSupport</a>
              </li>
            </ul>
          </p>
        </div>
        <div className="contactUs col-md-3 mt-5 ml-auto d-flex">
          <div className="contactUs_content">
            <div className="contactUs_list">
              <div className="contactUs_list-inner">
                <p className="bold">Контакты:</p>
                <ul>
                  <li>
                    <img
                      className="icon"
                      src={require("../../images/1_2228.png")}
                      alt="React_logo"
                    />
                    Alekseevr
                  </li>
                  <li>
                    <img
                      className="icon"
                      src={require("../../images/Telegram_Messenger.png")}
                      alt="React_logo"
                    />
                    dsf22222231e
                  </li>
                  <li>
                    <img
                      className="icon"
                      src={require("../../images/79-upwork-2-512.png")}
                      alt="React_logo"
                    />
                    id7214
                  </li>
                  <li>Почта: kkfan@mail.ru</li>
                  <li>Мой сайт: www.roman.ru</li>
                </ul>
              </div>
            </div>
            <p className="pt-3 bold">Отправить сообщение</p>
            <form
              action="http://localhost:3001/sendmail"
              onSubmit={e => sendMail(e)}
            >
              <label>
                От кого:
                <br />
                <input name="author" type="text" />
              </label>
              <br />
              <label>
                Введите сообщение
                <br />
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <br />
                <button className="btn btn-danger mt-2">Отправить</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUsComponent;
