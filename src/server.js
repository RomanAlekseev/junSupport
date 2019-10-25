console.log("server is running!")

      <footer>
        <div className="container">
          <div className="row d-flex">
             <p className="text-info pt-4">Создан в 2019</p>
          </div>
        </div>
      </footer>

        
        <section className="container">
          <h2 id="skills">Наша команда</h2>
          <p>
            Работая в аутсорскомпании нашей команде пришлось столкнуться с большим количеством собеседований.
            Внутрении собеседования, собеседования на проект. В итоге у нас накопились материалы которые помогли нам пройти ассестмент в нашей конторе и выйти напроект, и эти же материалы помогут вам. В  эти материалы входят:
             записи собеседований, задачи которые спрашивают чаще всего, вопросы, требования и т.д.
          </p>
          <figure>
            <img className="images" src={require('./images/Certificate.jpg')} alt="my June Certificate" />
            <figcaption>Данные на сертификате изменены</figcaption>
           </figure>
        </section>
        <section className="container">
          <h2 id="services">Наши Услуги</h2>
          <div className="container">
            <div className="row d-flex justify-content-around">
              <div className="col-md-6 service-card">
                <h3>Заказать весь пакет</h3>
                <ul>
                  <li>
                     Спсисок вопоросов и требований к разработчику JS
                   </li>
                   <li>Систематизирование шпоргалки</li>
                   <li>Тестовое собеседование со мной по скайпу</li>
                   <li>
                     Список типовых задач с осбеседований с решением
                   </li>
                   <li>2-е записи реального собеса и один внутрений собес реакт</li>
                   <li title="во время собеса я тоже буду на проводе, и подскажу в трудную минуту(Одна голова хорошо, а две лучше)"><b>Услуга на проводе</b>
                   </li>
                </ul>
                {/* <a href="#89" className="btn btn-danger">Заказать</a> */}
                <iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0&default-sum=10&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&mail=on&successURL=https%3A%2F%2Fwww.google.com%2F&quickpay=small&account=410014760855166&" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>              </div>
              <div className="col-md-6 service-card">
                <h3>Заказать материалы</h3>
                <ul>
                  <li>
                     Спсисок вопоросов и требований к разработчику JS
                   </li>
                   <li>Систематизирование шпоргалки</li>
                   <li>
                     Список типовых задач с осбеседований с решением
                   </li>
                   <li>2-е записи реального собеса и один внутрений собес реакт</li>
                </ul>
                <a href="#89" className="btn btn-danger">Заказать</a>
              </div>
              <div className="col-md-6 service-card">
                <h3>Гибкое сотрудничество</h3>
                <ul>
                  <li>
                     Гибкое сотрудничество подразумевает, что клиент лучше знает, что ему нужно и может предложить свой вариант сотрудничества
                   </li>
                </ul>
                <a href="#89" className="btn btn-danger">Связаться со мной</a>
              </div>
            </div>
          </div>
        </section>
        <section className="review">
          <h2>Отзывы</h2>
          <p>ddsgfddsfgdg fs gfdssdf ggg sdgf dsdfgfsgdgdg </p>
        </section>
        <section>
          <h2>Здесь будет голосовалка</h2>
        </section>
        <section>
          <h2>Написать мне</h2>
        </section>

{/* <p>
                   Если вам ещё только предстоит пройти ваши первые собеседования на вакансии Front-end Junior Developer, вы пришли по адресу.
                   Скорее всего у вас много вопросов: <br/>
                       Какие вопросы мне зададут?
                       Какие задачи меня попросят решить?
                       Где взять полезные материалы для подготовки?<br/>
                   Ведь было бы неплохо, если кто то из ваших знакомых уже имел опыт собеседований и мог поделиться им с вами? Провести тестовое собеседование? Разобрать задачи?
                </p> */}
              {/* <ul> 
                  <li>JS основы</li>
                  <li>ES 6</li>
                  <li>Web protocol</li>
                  <li>React/Redux</li>
                  <li>CSS и Вёрстка</li>
                  <li>Big O</li>
                  <li>Oсновные паттерны программирования</li>
                  <li>Адгоритмы и структуры данных</li>
              </ul> */}


// function MainPageComponent() {
//   return (
//     <main>
//       <section id="about_us" className="container">
//         <div className="logo">
//           <LogoComponent />
//         </div>
//         <h1>JunSupport</h1>

//         <div className="row">
        {/* <h2>
          Техподдержка Джунов <span>24/7</span>
        </h2>(
        <img
            className="icons"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAb1BMVEX33x4AAAD64h7/5x/XwhoYFQNDPQn/6R91ag7t1h2klBT/7iDdyBsyLQY2MQbhyxuzohaZihOKfRFQSArPuxnFshi9qxdYTwsiHwRIQQk+OAgrJwVhWAydjhNoXg1uYw19cQ8cGgMIBwAQDwOEdxDy85crAAAD+klEQVR4nO2aa4OyLBCGcXCXUMsyD21tbaf//xsf7AgIqAW974e5PrqBt8PAHFhCEARBEARBEARBEARBEARBEARBEARBEARBkLeBOwHfwWTMLwJKeVbNBVWcE0YDKYHzRCI3aKEkXjTTQ3ThazOb1DyMbegskog77wBW/0YaqyJnIaR8S+/46kih1VQXcqHg/g3jlkILoxDBMvPuMi4pQP5sSgSlby1Oq3S8RKHyrMUhxb46Vzam/RZECq3cSqJo/Skp/KdPSlR4XSKrFDrvVSJc16ddrFLYTHvtcTb70q3CPSqxSoFYfeuy5oK4WD0frSu/AcAmhSbq98PFLYDlzeMR+dBmhr2s5Dd9PGfXw6aJvYchq6800vOj5J7A1+LJ4pMxaCM9/5Hdk5bRr3+TuKQcZJ9Vx5QkTL4yxCqalEBJpVWKfKwcspApba8UJSoXIXxjqBR1M0flB7QMPOKiJGjZ4ZQCpSolarLQYuyR+aBpif5KS50UXMpCl3KJiaHqMZcUyFddLdHPltBQpnEklIlBiqCIA62TI82Gb7OW0y4O4sEuKZlZimASwmdcdRCN9QzyycJ/JHKWZHpWKTPrlvohpRCaOSqQxHMw6OkkADEcL3cmnyrJ7j8ol1YtxUcy/idAa8uu9pw89EtpV6myWabyaJchUtp+XGVutcz8KRkoRVgm5QtTL2zr76wbKqX1GT7vbu1vf2XzcCntj6HWi3qP3jJKSmuauZY77L1topFS2gNY3dqrtHdIKCmEctV9/6sFugypFSnemoN07ZJi3qlwkqW8HKFBm51O7VIo2RpfxOSGx6v9OIB4qg5ligvKtTGQWljsxzAL+31fCiVnUVupdpFnlZrCkGbXo94Q8dj0XSlArv1P+axWXfDZE6b8UTN3jnYttxvvtkDje3iVlgGUKHc3GEAinaoLtfIBdcz4zUz5s2O/ye5GZ+q+vC0GaDnBjkuVD4Wz8sfp6CNO6U0f54RRShnXqq5bPOncM5zOmRgA0F4i6ndVi5GhuVPpLffzebLXAu3hFmWBd9KBr2af1FWdTDqxeazXQn7SpzDwSJuh99LjQTNOSDv5dsC0zw9k+/5fX6nHp07UfB0p8y07oD3NV2heOVTyQ8+sx1g5atc9P79weikW9q6/epQBt1YcEi8sT0vPXdOf9n3Ad6GUCF+sTH2kG5POrMASeyOhZfrG9S7Nrc64MDVvaOy63d3l79QdIknemGZtLB1iYJVtlZrq3TaYiM6NZvbNrrT3swDyYtk5HtcTLy0wSuL55PCY9Fzn7lmhHXCWAvVuW3JfXUoAljKeZ3lO0pQN+DwRBtOU5Fmc5VwM9d0tHf/PQsH/vwhBEOR/zT/JNCqmOTSqGQAAAABJRU5ErkJggg=="
            alt=""
          />
          JS
          <img
            class="icons"
            src="https://cdn.worldvectorlogo.com/logos/react.svg"
            alt="react"
          />
          React) */}
//         </div>
//         {/* <h2>
//           Сопровождение Джунов <span>24/7</span>(Frontend,
//           <img
//             className="icons"
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAb1BMVEX33x4AAAD64h7/5x/XwhoYFQNDPQn/6R91ag7t1h2klBT/7iDdyBsyLQY2MQbhyxuzohaZihOKfRFQSArPuxnFshi9qxdYTwsiHwRIQQk+OAgrJwVhWAydjhNoXg1uYw19cQ8cGgMIBwAQDwOEdxDy85crAAAD+klEQVR4nO2aa4OyLBCGcXCXUMsyD21tbaf//xsf7AgIqAW974e5PrqBt8PAHFhCEARBEARBEARBEARBEARBEARBEARBEARBkLeBOwHfwWTMLwJKeVbNBVWcE0YDKYHzRCI3aKEkXjTTQ3ThazOb1DyMbegskog77wBW/0YaqyJnIaR8S+/46kih1VQXcqHg/g3jlkILoxDBMvPuMi4pQP5sSgSlby1Oq3S8RKHyrMUhxb46Vzam/RZECq3cSqJo/Skp/KdPSlR4XSKrFDrvVSJc16ddrFLYTHvtcTb70q3CPSqxSoFYfeuy5oK4WD0frSu/AcAmhSbq98PFLYDlzeMR+dBmhr2s5Dd9PGfXw6aJvYchq6800vOj5J7A1+LJ4pMxaCM9/5Hdk5bRr3+TuKQcZJ9Vx5QkTL4yxCqalEBJpVWKfKwcspApba8UJSoXIXxjqBR1M0flB7QMPOKiJGjZ4ZQCpSolarLQYuyR+aBpif5KS50UXMpCl3KJiaHqMZcUyFddLdHPltBQpnEklIlBiqCIA62TI82Gb7OW0y4O4sEuKZlZimASwmdcdRCN9QzyycJ/JHKWZHpWKTPrlvohpRCaOSqQxHMw6OkkADEcL3cmnyrJ7j8ol1YtxUcy/idAa8uu9pw89EtpV6myWabyaJchUtp+XGVutcz8KRkoRVgm5QtTL2zr76wbKqX1GT7vbu1vf2XzcCntj6HWi3qP3jJKSmuauZY77L1topFS2gNY3dqrtHdIKCmEctV9/6sFugypFSnemoN07ZJi3qlwkqW8HKFBm51O7VIo2RpfxOSGx6v9OIB4qg5ligvKtTGQWljsxzAL+31fCiVnUVupdpFnlZrCkGbXo94Q8dj0XSlArv1P+axWXfDZE6b8UTN3jnYttxvvtkDje3iVlgGUKHc3GEAinaoLtfIBdcz4zUz5s2O/ye5GZ+q+vC0GaDnBjkuVD4Wz8sfp6CNO6U0f54RRShnXqq5bPOncM5zOmRgA0F4i6ndVi5GhuVPpLffzebLXAu3hFmWBd9KBr2af1FWdTDqxeazXQn7SpzDwSJuh99LjQTNOSDv5dsC0zw9k+/5fX6nHp07UfB0p8y07oD3NV2heOVTyQ8+sx1g5atc9P79weikW9q6/epQBt1YcEi8sT0vPXdOf9n3Ad6GUCF+sTH2kG5POrMASeyOhZfrG9S7Nrc64MDVvaOy63d3l79QdIknemGZtLB1iYJVtlZrq3TaYiM6NZvbNrrT3swDyYtk5HtcTLy0wSuL55PCY9Fzn7lmhHXCWAvVuW3JfXUoAljKeZ3lO0pQN+DwRBtOU5Fmc5VwM9d0tHf/PQsH/vwhBEOR/zT/JNCqmOTSqGQAAAABJRU5ErkJggg=="
//             alt=""
//           />
//           ,
//           <img
//             class="icons"
//             src="https://cdn.worldvectorlogo.com/logos/react.svg"
//             alt="react"
//           />)
//         </h2> */}
//         <p>
//           Вам предстоит пройти собеседование на должнсть Фронтенд разработчика?
//           Будем рады вам помочь!
//         </p>
        {/* <p>
          Наш сервис предоствляет набор услуг для того что бы вы успешно прошли
          собеседование:
        </p> */}
        {/* <ul>
          <li>
            Спсисок вопоросов и требований к разработчику JS уровня Junior(эти
            вопросы спрашивали на реальных собеседованиях у меня и моих друзей)
          </li>
          <li>Систематизирование шпоргалки</li>
          <li>Тестовое собеседование со мной по скайпу</li>
          <li>Список типовых задач с осбеседований с решением и объяснением</li>
          <li>2-е записи реального собеса и один внутрений собес реакт</li>
          <li>
            <b>
              Услуга на проводе, во время собеса я тоже буду на проводе, и
              подскажу в трудную минуту(Одна голова хорошо, а две лучше)
            </b>
          </li>
        </ul> */}
        {/* <a href="#8" className="btn btn-danger">
          Заказать
        </a> */}
//       </section>
//     </main>
//   );
// }
