import React from "react";
import PropTypes from "prop-types";
import "./Navigation.css";
import menuWhite from "../../images/icon/menu-white.svg";
import menuBlack from "../../images/icon/menu-black.svg";
import logoWhite from "../../images/logo/mainpage.svg";
import logoBlack from "../../images/logo/subpage.svg";
import wechatWhite from "../../images/icon/微信icon.svg";
import wechatBlack from "../../images/icon/weixin.svg";
import linkedinWhite from "../../images/icon/领英icon.svg";
import linkedinBlack from "../../images/icon/LINKEDIN.svg";
import data from "./NavigationData.js";
import NavLink from "../NavLink/NavLink";

const navigation = () => {
  return (
    <div id="navigation">
      <div className="container">
        <div id="navigation-wrap">
          <button id="nav-icon-open">
            <img className="img-show" src={menuWhite} />
            <img className="img-none" src={menuBlack} />
          </button>
          <div id="main-page-container">
            <img className="img-show" src={logoWhite} />
            <img className="img-none" src={logoBlack} />
          </div>
          <ul id="nav-links">
            {data.map((item) => {
              return (
                <NavLink
                  key={item.title}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </ul>
          <div id="nav-addition">
            <a id="wechat">
              <img className="img-show" src={wechatWhite} />
              <img className="img-none" src={wechatBlack} />
            </a>
            <a id="linkedin">
              <img className="img-show" src={linkedinWhite} />
              <img className="img-none" src={linkedinBlack} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navigation;
