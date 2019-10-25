import React from "react";

import "./beforeStart.less";

function BeforeStart(props) {
  return (
    <div className="beforeTest container">
      <h2>
        На этой страницы вы можете проверить свои знания по теории
        js,git,react,redux,css
      </h2>
      <p>
        В наше тесте 30 вопросов, на прохождение теста отведено 40
        мин, к любому вопросу вы можете вернуться в любой момент
      </p>
      <button className="mx-auto btn btn-outline-danger" onClick={props.startTimer}>начать тестирование</button>
    </div>
  );
}

export default BeforeStart;
