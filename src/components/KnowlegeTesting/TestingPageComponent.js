import React, { Component } from "react";
import { Prompt } from "react-router";

import "./Test.less";

import BeforeStart from "./beforeTest/beforeStartComponent";
import AfterTest from "./afterTest/afterTest";
import Singleton from "../../services/api-clients";

const apiClient = Singleton.makeClient();

class KnowledgeTesting extends Component {
  state = {
    started: false,
    question: [],
    variants: [],
    answers: {},
    questionInWork: 0,
    time: 0,
    isOn: false,
    start: 0,
    result: {},
    description: {}
  };

  //timer

  componentDidMount() {
    apiClient.makeRequest("questions").then(data =>
      this.setState({
        question: data.questions,
        variants: data.answerVariants
      })
    );
  }

  startTimer = () => {
    this.setState({
      time: this.state.time,
      isOn: true,
      start: Date.now() - this.state.start,
      started: true
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      400
    );
  };

  stopTimer = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  };

  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }
  //end timer

  choseAnswer = ({ target }) => {
    const value = target.value;
    const id = this.state.question[this.state.questionInWork]._id;
    this.setState(state => {
      return {
        answers: { ...state.answers, [id]: value }
      };
    });
  };

  toPreviousQuestion = () => {
    this.setState(state => {
      return {
        questionInWork: state.questionInWork - 1
      };
    });
  };

  answerForQuestion = e => {
    e.preventDefault();

    if (this.state.questionInWork + 1 === this.state.question.length) {
      this.stopTimer();

      apiClient
        .makeRequest("result", {
          post: "true",
          body: this.state.answers
        })
        .then(response => {
          console.log("Success:", response);
          this.setState({
            result: response.result,
            description: response.description
          });
        })
        .catch(error => console.error("Error:", error));
    }

    if (
      this.state.answers[this.state.question[this.state.questionInWork]._id]
    ) {
      return this.setState(state => {
        return {
          questionInWork: state.questionInWork + 1
        };
      });
    }
    alert("Выберите ответ, не волнуйтесь к вопросам можно вернуться");
  };

  render() {
    return this.state.started ? (
      this.state.questionInWork >= this.state.question.length ? (
        <AfterTest
          time={this.state.time}
          result={this.state.result}
          state={this.state}
          questions={this.state.question}
          description={this.state.description}
          answers={this.state.variants}
          choosen={this.state.answers}
        />
      ) : (
        <div className="container testing d-flex justify-content-center flex-column">
          <Prompt
            when={this.state.isOn}
            message="You have unsaved changes, are you sure you want to leave?"
          />
          <div className="counter">
            <p className="someInfo">
              Вопрос {this.state.questionInWork + 1}/31
            </p>
            <p className="someInfo">
              Время с начала теста:{" "}
              {(this.state.time / 1000 / 2 / 60).toFixed(2)} мин
            </p>
          </div>
          <p className="text-center font-weight-bold question mx-auto">
            {this.state.question[this.state.questionInWork].question}
          </p>
          <form
            id="testQuestion"
            onChange={this.choseAnswer}
            className="mx-auto text-left"
          >
            {this.state.variants[this.state.questionInWork].variants.map(
              (item, i) => {
                return (
                  <React.Fragment>
                    <label>
                      <input
                        type="radio"
                        name="question"
                        value={i}
                        className="variant"
                        checked={
                          this.state.answers[
                            this.state.question[this.state.questionInWork]._id
                          ] == i
                        }
                      />
                      {item}
                    </label>
                    <br />
                  </React.Fragment>
                );
              }
            )}
            <br />
            <div className="relative-container">
              <button
                className="col-md-5 mx-auto mt-3 btn btn-danger"
                onClick={this.answerForQuestion}
                hidden={
                  this.state.answers[
                    this.state.question[this.state.questionInWork]._id
                  ]
                    ? false
                    : true
                }
              >
                Ответить
              </button>
            </div>
          </form>
          <button
            className="control r"
            disabled={
              this.state.answers[
                this.state.question[this.state.questionInWork]._id
              ]
                ? false
                : true
            }
            title={
              this.state.answers[
                this.state.question[this.state.questionInWork]._id
              ]
                ? "К следующему вопросу"
                : "Сначала выберите вариант ответа"
            }
            onClick={this.answerForQuestion}
          >
            &gt;
          </button>
          <button
            className="control l"
            onClick={this.toPreviousQuestion}
            disabled={this.state.questionInWork <= 0 ? true : false}
          >
            &lt;
          </button>
        </div>
      )
    ) : (
      <BeforeStart startTimer={this.startTimer} />
    );
  }
}

export default KnowledgeTesting;
