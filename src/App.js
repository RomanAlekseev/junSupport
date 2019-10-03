import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.less";

import KnowledgeTesting from "./components/TestingPage"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="container">
            <li className="logo">
                <div className="junSupport">
                  <div className="phone"></div>
                  <span>Jun</span><br></br><i>Support</i>
                </div>
            </li>
            <li>
              <a href="#JunSupport">О нас</a>
            </li>
            <li>
              <a href="#skills">Наш опыт</a>
            </li>
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#5">Голосование</a>
            </li>
            <li>
              <a href="#5">Бесплатное тестироваине</a>
            </li>
            <li>
              <a href="#5">Связаться со Мной</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
      
        <KnowledgeTesting />

      </main>
      <footer>
        <div className="container">
          <div className="row d-flex">
             <p className="text-info pt-4">Создан в 2019</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
