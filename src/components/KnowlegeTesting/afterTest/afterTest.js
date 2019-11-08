import React from "react";
import "./afterTest.less";

function AfterTest(props) {
  return (
    <React.Fragment>
      <div className="beforeTest container">
        <h2>
          Вы завершили тест за {(props.time / 1000 / 2 / 60).toFixed(2)} мин{" "}
          <br /> {6 - Object.keys(props.result).length} ответов оказались
          верными
        </h2>
      </div>
      <div className="statistic container">
        {props.questions.map((item, i) => {
          return (
            <div
              className={
                props.result[item._id]
                  ? "statistic__item statistic__item-error"
                  : "statistic__item"
              }
            >
              {item.question}

              {props.answers[i].variants.map((itemj, j) => {
                return (
                  <p className={(props.choosen[item._id] = j ? "green" : "")}>
                    {itemj}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default AfterTest;
