import React from "react";

import LogoComponent from "../Logo";
import Singleton from "../../services/api-clients";
import "./ContactUs.less"

const apiClient = Singleton.makeClient();

function ContactUsComponent() {
    const sendMail = (e) => {
        e.preventDefault();
        let form = document.forms[0];
        let author = form.elements.author.value;
        let message = form.elements.message.value;

        const option = {
            queryParams: {
                author: author,
                message: message,
            }
        }
        apiClient.makeRequest('sendmail', option).then(() =>{ 
                  alert("Сообщение отпраленно!");
                }).catch(e => alert(e.message))
    }
    return (
        <div className="contactUs container">
            <div className="row pt-4 col-md-6">
            <div className="logo">
                <LogoComponent />
              </div>
              <h2 class="brend-title">JunSupport</h2>
            </div>
            <hr/>
            <div className="contactUs">
                <p>C предложениями по наполнению сайта или по вопросам сотрудничества вы можете связаться с нами одним из следующих способов:</p>
                <ul>
                    <li>Скайп: Alekseevr</li>
                    <li>Телеграмм: dsf22222231e</li>
                    <li>Почта: kkfan@mail.ru</li>
                    <li>Мой сайт: www.roman.ru</li>
                </ul>
                <hr/>
                <p className="pt-3">Быстрое сообщение</p>
                <form action="http://localhost:3001/sendmail" onSubmit={e => sendMail(e)}>
                    <label>
                        От кого:<br/>
                        <input name="author" type="text"/>
                    </label><br/>
                    <label>
                        Введите сообщение<br/>
                        <textarea name="message" id="" cols="30" rows="10"></textarea><br/>
                        <button>Отправить</button>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default ContactUsComponent;