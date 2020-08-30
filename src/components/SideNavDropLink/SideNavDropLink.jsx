import React from "react";
import "./SideNavDropLink.css";

const sideNavDropLink = ({ content }) => {
  return (
    <li>
      <a className="side-nav-drop-link g-font g-t3 g-t-white">{content}</a>
    </li>
  );
};

export default sideNavDropLink;
