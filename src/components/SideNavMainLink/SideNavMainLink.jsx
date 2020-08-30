import React from "react";
import SideNavDropLink from "../SideNavDropLink/SideNavDropLink";
import "./SideNavMainLink.css";

const sideNavMainLink = ({ title, imgShow, imgNone, content }) => {
  return (
    <li className="side-main-link">
      <div className="side-main-link-container">
        <a className="g-font g-t3 g-t-white">{title}</a>
        {imgShow === "" ? null : <img className="img-show" src={imgShow} />}
        {imgNone === "" ? null : <img className="img-none" src={imgNone} />}
      </div>
      <ul className="side-nav-drop container">
        {content.map((item) => {
          return <SideNavDropLink key={item} content={item} />;
        })}
      </ul>
    </li>
  );
};

export default sideNavMainLink;
