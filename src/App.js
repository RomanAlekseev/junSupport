import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.less"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="container">
            <li className="logo">
                <div className="round">
                  <div className="phone"></div>
                  <span>Jun</span><br></br><i>Support</i>
                </div>
            </li>
            <li>
              <a href="#2">Домой</a>
            </li>
            <li>
              <a href="#3">Обо Мне</a>
            </li>
            <li>
              <a href="#4">Услуги</a>
            </li>
            <li>
              <a href="#5">Связаться со Мной</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="container">
          <h1>Сопровождение Джунов</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro unde
            dolore illum expedita voluptate suscipit cupiditate dolorum,
            corporis nesciunt fuga optio illo hic, deserunt necessitatibus omnis
            nihil ipsa quaerat autem quos sint iste totam id. Fuga eos saepe
            nulla, ad et itaque vitae repellat quod aut consequatur deserunt!
            Similique mollitia dolorum totam? Inventore provident magni odit
            asperiores temporibus voluptatem animi voluptatum sequi cumque
            obcaecati, nulla ut vel impedit minus iure.
          </p>
          <a href="#8">Заказать</a>
        </section>
        <section>
          <h2>Обо мне</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro unde
            dolore illum expedita voluptate suscipit cupiditate dolorum,
            corporis nesciunt fuga optio illo hic, deserunt necessitatibus omnis
            nihil ipsa quaerat autem quos sint iste totam id. Fuga eos saepe
            nulla, ad et itaque vitae repellat quod aut consequatur deserunt!
            Similique mollitia dolorum totam? Inventore provident magni odit
            asperiores temporibus voluptatem animi voluptatum sequi cumque
            obcaecati, nulla ut vel impedit minus iure.
          </p>
          <img alt="my June Certificate" />
        </section>
        <section>
          <h2>Наши Услуги</h2>
          <ul>
            <li>
              Спсисок вопоросв и требований к разработчику JS уровня June(эти
              требования предъявлялись ко мне и моим друзьям)
            </li>
            <li>Систематизирование шпоргалки</li>
            <li>Тестовое собеседование со мной 1,5 часа</li>
            <li>
              Список типовых задач с осбеседований с решением и объяснением
            </li>
            <li>2-е записи реального собеса и один внутрений собес реакт</li>
            <li>
              Услуга на проводе, во время собеса я тоже буду на проводе и в
              двоём мы затащим ваш собес
            </li>
          </ul>
        </section>
        <section>
          <h2>Отзывы</h2>
          <p>ddsgfddsfgdg fs gfdssdf ggg sdgf dsdfgfsgdgdg </p>
        </section>
      </main>
      <footer>
        <ul>
          <li>vk</li>
          <li>vk</li>
          <li>vk</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
