import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Navigation.scss";
import data from "./NavigationData.js";
import NavLink from "../NavLink/NavLink";
import { showSideNav } from "../../actions/SideNavDisplay";

const navigation = ({
  dropDisplay,
  navStyleChange,
  sideNavDisplay,
  showSideNav,
}) => {
  const nav = (
    <div id="navigation" className={navStyleChange ? "nav-scrolled" : ""}>
      <div className="container">
        <div id="navigation-wrap">
          <button id="nav-icon-open" onClick={showSideNav}>
            <img
              className={navStyleChange ? "img-none" : "img-show"}
              src={data.menuWhite}
            />
            <img
              className={navStyleChange ? "img-show" : "img-none"}
              src={data.menuBlack}
            />
          </button>
          <div id="main-page-container">
            <img
              className={navStyleChange ? "img-none" : "img-show"}
              src={data.logoWhite}
            />
            <img
              className={navStyleChange ? "img-show" : "img-none"}
              src={data.logoBlack}
            />
          </div>
          <ul id="nav-links">
            {dropDisplay.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  index={index}
                  show={item.showDrop}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </ul>
          <div id="nav-addition">
            <a id="wechat">
              <img
                className={navStyleChange ? "img-none" : "img-show"}
                src={data.wechatWhite}
              />
              <img
                className={navStyleChange ? "img-show" : "img-none"}
                src={data.wechatBlack}
              />
            </a>
            <a id="linkedin">
              <img
                className={navStyleChange ? "img-none" : "img-show"}
                src={data.linkedinWhite}
              />
              <img
                className={navStyleChange ? "img-show" : "img-none"}
                src={data.linkedinBlack}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  if (sideNavDisplay) {
    return null;
  } else {
    return nav;
  }
};

const mapStateToProps = (state) => {
  return {
    dropDisplay: state.navDropDisplay,
    navStyleChange: state.navStyleChange,
    sideNavDisplay: state.sideNavDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSideNav: () => {
      dispatch(showSideNav());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navigation);
