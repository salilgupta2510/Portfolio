import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Projects from "./components/projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { browserHistory } from "react-router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
