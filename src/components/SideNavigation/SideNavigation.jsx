import React from "react";
import style from "./SideNavigation.css";
import closeWhite from "../../images/icon/关闭-white.svg";
import logoWhite from "../../images/logo/mainpage.svg";

const sideNavigation = () => {
  return (
    <div className={style.side_navigation}>
      <div className={style.side_navigation_wrap}>
        <div className="container">
          <div className={style.side_main_page_container}>
            <button className={style.side_nav_icon_close}>
              <img className="img-show" src={closeWhite} />
            </button>
            <div className={style.side_logo_container}>
              <img className="img-show" src={logoWhite} />
            </div>
          </div>
        </div>
        <div className={`${style.side_nav_top_line} line`}></div>
        <div className="container">
          <ul className={style.side_nav_links}></ul>
        </div>
      </div>
    </div>
  );
};

export default sideNavigation;
