import React from "react";
import "./Footer.less";

const FooterComponent = () => {
  return (
    <footer className="d-flex">
      <div className="container d-flex">
        <div className="copyright col-md-2">Roman Alekseev &#9400; 2019</div>
        <ul>
          <li>Материалы</li>
          <li>Тесты</li>
          <li>О проекте</li>
          <li>Связаться с нами</li>
        </ul>
        <div className="ml-auto mr-5">GitHub</div>
      </div>
    </footer>
  );
};

export default FooterComponent;
