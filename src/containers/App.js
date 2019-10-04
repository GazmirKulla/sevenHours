import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import 'assets/css/vendor/bootstrap.min.css'
import 'assets/css/styles.scss';

import Team from "routes/Team";
import User from "routes/User";
import Header from "./Header";
import { history } from 'util/history'

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <div className="content">
          <Route exact path="/" component={Team} />
          <Route path="/user/:userId" component={User} />
        </div>
      </Router>
    );
  }
}

