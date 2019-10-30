import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS_Global/App.less";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import ContactUs from "./components/ContactUs"
import MainPage from "./components/MainPage";
import Materials from "./components/Materials";
// import Test from './components/KnowlegeTesting';
// import { Beforeunload } from 'react-beforeunload';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/materials" component={Materials} />
          {/* 
          <Route path="/contactUs" component={ContactUs} />
          <Beforeunload onBeforeunload={event => event.preventDefault()}>
            <Route path="/test" component={Test} />
          </Beforeunload> */}
        </Switch>
        <div className="footer">
          <div className="container-fluid">Roman Alekseev&#9400; 2019 </div>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
