import React from "react";
import "./SideNavigation.css";
import closeWhite from "../../images/icon/关闭-white.svg";
import logoWhite from "../../images/logo/mainpage.svg";
import data from "./SideNavigationData.js";
import SideNavMainLink from "../SideNavMainLink/SideNavMainLink";

const sideNavigation = () => {
  return (
    <div id="side-navigation">
      <div id="side-navigation-wrap">
        <div className="container">
          <div id="side-main-page-container">
            <button id="side-nav-icon-close">
              <img className="img-show" src={closeWhite} />
            </button>
            <div id="side-logo-container">
              <img className="img-show" src={logoWhite} />
            </div>
          </div>
        </div>
        <div id="side-nav-top-line" className="line"></div>
        <div className="container">
          <ul id="side-nav-links">
            {data.map((item) => {
              return (
                <SideNavMainLink
                  key={item.title}
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
};

export default sideNavigation;
