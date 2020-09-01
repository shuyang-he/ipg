import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NavBanner from "./components/NavBanner/NavBanner";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import Footer from "./components/Footer/Footer";
import TopBannerCon from "./components/TopBannerCon/TopBannerCon";
import Main from "./components/Main/Main";
import MessageBoard from "./components/MessageBoard/MessageBoard";
import Contact from "./components/Contact/Contact";
import Message from "./components/Message/Message";
import Search from "./components/Search/Search";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <NavBanner />
        <SideNavigation />
        <TopBannerCon />
        <Switch>
          <Route path="/">
            <MessageBoard />
            <Contact />
            <Message />
            <Search />
            <div className="container">
              <Main />
            </div>
          </Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
