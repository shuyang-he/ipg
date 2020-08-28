import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
// import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
