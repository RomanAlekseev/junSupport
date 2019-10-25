import React from "react";
import './afterTest.less'

function AfterTest(props) {
    return (
      <React.Fragment>
       <div className="beforeTest container">
        <h2>
          Вы завершили тест за {(props.time/1000/2/60).toFixed(2)} мин <br/> {6 - Object.keys(props.result).length} ответов оказались верными
        </h2>
      </div>
      <div className="statistic">
      </div>
      </React.Fragment>
    );
  }
  
  export default AfterTest;
  