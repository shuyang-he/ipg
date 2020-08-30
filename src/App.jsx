import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NavBanner from "./components/NavBanner/NavBanner";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <NavBanner />
        <SideNavigation />
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
