import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS_Global/App.less";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import MainPage from "./components/MainPage";
import Materials from "./components/Materials";
import Test from "./components/KnowlegeTesting";
import { Beforeunload } from "react-beforeunload";
import List from "./components/contentList";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/materials" component={Materials} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/tests" component={List} />
          <Beforeunload onBeforeunload={event => event.preventDefault()}>
            <Route path="/test/Job_Interview" component={Test} />
          </Beforeunload>
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
