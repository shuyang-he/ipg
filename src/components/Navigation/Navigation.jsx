import React from "react";
import PropTypes from "prop-types";
import style from "./Navigation.css";
import menuWhite from "../../images/icon/menu-white.svg";
import menuBlack from "../../images/icon/menu-black.svg";
import logoWhite from "../../images/logo/mainpage.svg";
import logoBlack from "../../images/logo/subpage.svg";
import wechatWhite from "../../images/icon/微信icon.svg";
import wechatBlack from "../../images/icon/weixin.svg";
import linkedinWhite from "../../images/icon/领英icon.svg";
import linkedinBlack from "../../images/icon/LINKEDIN.svg";

const navigation = () => {
  return (
    <div className={style.navigation}>
      <div className="container">
        <div className={style.navigation_wrap}>
          <button className={style.nav_icon_open}>
            <img className="img-show" src={menuWhite} />
            <img className="img-none" src={menuBlack} />
          </button>
          <div className={style.main_page_conainer}>
            <img className="img-show" src={logoWhite} />
            <img className="img-none" src={logoBlack} />
          </div>
          <ul className={style.nav_links}></ul>
          <div className={style.nav_addition}>
            <a className={style.wechat}>
              <img className="img-show" src={wechatWhite} />
              <img className="img-none" src={wechatBlack} />
            </a>
            <a className={style.linkedin}>
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
