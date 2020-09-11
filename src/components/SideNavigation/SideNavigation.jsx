import React from "react";
import { connect } from "react-redux";
import "./SideNavigation.css";
import data from "./SideNavigationData.js";
import SideNavMainLink from "../SideNavMainLink/SideNavMainLink";
import { hideSideNav } from "../../actions/SideNavDisplay";

const sideNavigation = ({
  sideNavDisplay,
  sideNavDropDisplay,
  hideSideNav,
}) => {
  const sideNav = (
    <div id="side-navigation">
      <div id="side-navigation-wrap">
        <div className="container">
          <div id="side-main-page-container">
            <button id="side-nav-icon-close" onClick={hideSideNav}>
              <img className="img-show" src={data.closeWhite} />
            </button>
            <div id="side-logo-container">
              <img className="img-show" src={data.logoWhite} />
            </div>
          </div>
        </div>
        <div id="side-nav-top-line" className="line"></div>
        <div className="container">
          <ul id="side-nav-links">
            {sideNavDropDisplay.map((item, index) => {
              return (
                <SideNavMainLink
                  key={index}
                  index={index}
                  show={item.showDrop}
                  title={item.title}
                  imgShow={item.imgShow}
                  imgNone={item.imgNone}
                  content={item.content}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
  if (sideNavDisplay) {
    return sideNav;
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    sideNavDisplay: state.sideNavDisplay,
    sideNavDropDisplay: state.sideNavDropDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideSideNav: () => {
      dispatch(hideSideNav());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sideNavigation);
