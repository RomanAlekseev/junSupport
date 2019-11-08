import React, { Component } from "react";
import "./contentList.less";
import Singleton from "../../services/api-clients";

const apiClient = Singleton.makeClient();

class ContentListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    apiClient
      .makeRequest("getList")
      .then(data => this.setState({ list: data }));
  }

  render() {
    return (
      <div className="container">
        <div className="content-list">
          <p className="mini-menu">
            <a href="#1">Материалы </a>/
            <a href="#2"> Вопрсосы с собеседований </a>/
            <a href="#2"> Контекст</a>
          </p>
          <ol className="content-list__list">
            <h2>Тесты</h2>
            <p className="description">Проверьте свои знания!</p>
            <hr />
            {this.state.list.map(({ title, href }, i) => {
              return (
                <li className="content-list__list_list-element">
                  <a href={`test/${href}`}>{title}</a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default ContentListComponent;
