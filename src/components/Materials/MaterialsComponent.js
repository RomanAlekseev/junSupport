import React, { Component } from "react";
// import Example from "./posts/Example";
// import Example2 from "./posts/Example2";
// import { NavLink } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import CodeExample from "./CodeExample";

import "./Materials.less";

class MaterialsComponent extends Component {
  state = {
    sidebarisOpen: true
  };

  openSidebar = () => {
    this.setState(prevState => {
      return { sidebarisOpen: !prevState.sidebarisOpen };
    });
  };
  render() {
    return (
      <div className="page-content">
        <aside
          className={
            this.state.sidebarisOpen
              ? "materials-sidebar open"
              : "materials-sidebar"
          }
        >
          <span className="materials-sidebar__title col-12 col-md-4">Menu</span>
          <hr />

          <div class="input-group col-md-10 mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>

          <ul className="col-md-12 materials-sidebar__list">
            <li className="materials-sidebar__item choosenElement">
              <ion-icon name="clipboard"></ion-icon> Требования к Junior JS
              Developer
            </li>
            <li className="materials-sidebar__item">
              <ion-icon name="help"></ion-icon> Вопросы с собеседований/ответы
            </li>
            <li className="materials-sidebar__item">
              <ion-icon name="calculator"></ion-icon> Задачи с собеседований с
              решением
            </li>
            <li className="materials-sidebar__item">
              <ion-icon name="book"></ion-icon> Библиография
            </li>
            <li className="materials-sidebar__item">
              <ion-icon name="paper"></ion-icon> Шпоргалки
            </li>
            <li className="materials-sidebar__item">
              <ion-icon name="play-circle"></ion-icon> Запись собеседования
            </li>
          </ul>
        </aside>
        <div
          className={
            this.state.sidebarisOpen
              ? "controls col-md-5 disposition"
              : "controls col-md-5"
          }
        >
          <div className="burger" onClick={this.openSidebar}>
            <div className="burger_menu">
              <div
                className={
                  this.state.sidebarisOpen ? "line first rotate" : "line first"
                }
              ></div>
              <div className="line second"></div>
              <div
                className={
                  this.state.sidebarisOpen ? "line third rotate" : "line third"
                }
              ></div>
            </div>
          </div>
          <p className="mini-menu">
            <a href="#1">Материалы </a>/
            <a href="#2"> Вопрсосы с собеседований </a>/
            <a href="#2"> Контекст</a>
          </p>
        </div>
        <main id="materials" className="container">
          {/* <div className="burger" onClick={this.openSidebar}>
            <ion-icon name="menu" size="large"></ion-icon>
          </div> */}
          <h1>Title</h1>
          <i>The next title</i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            debitis repellat minima atque modi accusamus quo numquam sint
            laudantium et possimus, neque quam eligendi assumenda praesentium
            nemo eius voluptate alias non reprehenderit omnis animi. Esse
            aspernatur facilis minima quod similique quis hic exercitationem
            suscipit quia quidem. Repellendus neque veniam labore! Commodi totam
            fugiat voluptates, magnam enim reprehenderit, mollitia vel, sit
            culpa quisquam ipsam odio delectus dolorem suscipit optio adipisci
            incidunt similique atque sed dignissimos? Asperiores, quam sit. Odio
            laudantium consequuntur deserunt unde corporis autem, iste illo quam
            perferendis ipsum sequi earum ea reiciendis excepturi id temporibus
            repellendus mollitia quo repudiandae rerum velit nulla. Vero officia
            veniam neque praesentium maiores accusamus iste delectus ex, quis
            aliquam reiciendis sit quae quia deserunt cumque totam molestiae
            eligendi amet, nulla necessitatibus nesciunt quaerat labore alias.
            Expedita modi animi eligendi necessitatibus nostrum possimus!
            Laborum eum quidem totam doloremque maiores, hic eius vitae sapiente
            distinctio praesentium fuga harum suscipit corrupti commodi
            architecto sequi laboriosam cupiditate nisi quisquam magni deleniti
            autem fugiat atque? Quod facere, dolor temporibus saepe consectetur
            fuga veritatis impedit ipsa debitis repellendus. Aperiam aliquam
            necessitatibus ipsum vero distinctio soluta. Dignissimos quas iste
            optio rem labore. Porro necessitatibus repellat iste perspiciatis
            quod sequi esse at pariatur autem hic exercitationem assumenda
            temporibus vitae reiciendis similique, voluptas vero quos beatae.
            Natus architecto deleniti eligendi soluta nihil animi, fugit enim
            hic unde autem eos iste amet incidunt cum ea! Doloremque eligendi
            reiciendis quos ducimus. Mollitia ratione repellat unde minus,
            corrupti ipsum laudantium sunt! Distinctio ipsa similique deleniti
            corporis?
          </p>
          <CodeExample />
          <a href="#3">К следующему материалу...</a>
        </main>
      </div>
    );
  }
}

// II version

// class Materials extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarisOpen: true
//     };
//   }

// openSidebar = () => {
//   this.setState(prevState => {
//     return { sidebarisOpen: !prevState.sidebarisOpen };
//   });
// };

//   render() {
//     return (
{
  /* <div className="page-content">
        <aside
          className={
            this.state.sidebarisOpen
              ? "materials-sidebar open"
              : "materials-sidebar"
          }
        >
          <span className="col-12 col-md-4">Menu</span>
          <ul className="col-md-4">
            <li>first</li>
            <li>second</li>
            <li>third</li>
            <li>fourth</li>
            <li>five</li>
          </ul>
        </aside>
        <main id="materials" className="container-fluid">
          <div className="burger" onClick={this.openSidebar}>
            <ion-icon name="menu" size="large"></ion-icon>
          </div>
          <h1>Title</h1>
          <i>The next title</i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            debitis repellat minima atque modi accusamus quo numquam sint
            laudantium et possimus, neque quam eligendi assumenda praesentium
            nemo eius voluptate alias non reprehenderit omnis animi. Esse
            aspernatur facilis minima quod similique quis hic exercitationem
            suscipit quia quidem. Repellendus neque veniam labore! Commodi totam
            fugiat voluptates, magnam enim reprehenderit, mollitia vel, sit
            culpa quisquam ipsam odio delectus dolorem suscipit optio adipisci
            incidunt similique atque sed dignissimos? Asperiores, quam sit. Odio
            laudantium consequuntur deserunt unde corporis autem, iste illo quam
            perferendis ipsum sequi earum ea reiciendis excepturi id temporibus
            repellendus mollitia quo repudiandae rerum velit nulla. Vero officia
            veniam neque praesentium maiores accusamus iste delectus ex, quis
            aliquam reiciendis sit quae quia deserunt cumque totam molestiae
            eligendi amet, nulla necessitatibus nesciunt quaerat labore alias.
            Expedita modi animi eligendi necessitatibus nostrum possimus!
            Laborum eum quidem totam doloremque maiores, hic eius vitae sapiente
            distinctio praesentium fuga harum suscipit corrupti commodi
            architecto sequi laboriosam cupiditate nisi quisquam magni deleniti
            autem fugiat atque? Quod facere, dolor temporibus saepe consectetur
            fuga veritatis impedit ipsa debitis repellendus. Aperiam aliquam
            necessitatibus ipsum vero distinctio soluta. Dignissimos quas iste
            optio rem labore. Porro necessitatibus repellat iste perspiciatis
            quod sequi esse at pariatur autem hic exercitationem assumenda
            temporibus vitae reiciendis similique, voluptas vero quos beatae.
            Natus architecto deleniti eligendi soluta nihil animi, fugit enim
            hic unde autem eos iste amet incidunt cum ea! Doloremque eligendi
            reiciendis quos ducimus. Mollitia ratione repellat unde minus,
            corrupti ipsum laudantium sunt! Distinctio ipsa similique deleniti
            corporis?
          </p>
        </main>
      </div> */
}
//     );
//   }
// }

// I version

// function Materials() {
//   return (
//     <main id="materials">
//       <div className="container">
//         <div className="row d-flex flex-row justify-content-center">
//           <nav className="materials-navigation col-2 col-md-4">
//             <ul className="listOfElements">
//               {/* <p>Материалы для подготовки --> Содержание:</p> */}
//               <p className="d-flex justify-content-between align-items-center">
//                 <span>Меню</span>
//                 <ion-icon name="menu" size="large"></ion-icon>
//               </p>
//               <hr />
//               <li>
//                 <label for="checkbox">
//                   <ion-icon name="help"></ion-icon> Вопросы с
//                   собеседований/ответы
//                 </label>
//                 <input type="checkbox" id="checkbox" className="invis" />
//                 <ul className="innerList">
//                   <li>
//                     <NavLink exact to="/materials">
//                       Сколько типов данных в js
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/materials/EventLoop">EventLoop</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/materials/Context">Контескт вызова</NavLink>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <label>
//                   <ion-icon name="clipboard"></ion-icon> Требования к Junior JS
//                   Developer
//                 </label>
//               </li>
//               <li>
//                 <label>
{
  /* <ion-icon name="calculator"></ion-icon> Задачи с собеседований
                  с решением */
}
//                 </label>
//               </li>
//               <li>
//                 <label>
//                   <ion-icon name="bookmarks"></ion-icon> Библиография
//                 </label>
//               </li>
//               <li>
//                 <label>
//                   <ion-icon name="play-circle"></ion-icon> Запись собеседования
//                 </label>
//               </li>
//               <li>
//                 <label>
//                   <ion-icon name="paper"></ion-icon> Шпоргалки
//                 </label>
//               </li>
//               {/* <li><label>Требования к Junior JS Developer</label></li>
//               <li><label>Задачи с собеседований с решением</label></li>
//               <li><label>Библиография</label></li>
//               <li><label>Задачи с собеседований с решением</label></li>
//               <li><label>Библиография</label></li>
//               <li><label>Задачи с собеседований с решением</label></li>
//               <li><label>Библиография</label></li>
//               <li><label>Задачи с собеседований с решением</label></li>
//               <li><label>Библиография</label></li>
//               <li><label>Задачи с собеседований с решением</label></li>
//               <li><label>Библиография</label></li> */}
//             </ul>
//           </nav>
//           <Route exact path="/materials" component={Example} />
//           <Route path="/materials/EventLoop" component={Example} />
//           <Route exact path="/materials/Context" component={Example2} />
//         </div>
//       </div>
//     </main>
//   );
// }

export default MaterialsComponent;
