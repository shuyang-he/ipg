import React from "react";
import NavDropLink from "../NavDropLink/NavDropLink";
import "./NavLink.css";

const navLink = ({ title, content }) => {
  return (
    <li>
      <a className="g-font g-t3 g-t-white">{title}</a>
      <ul className="nav-drop container">
        {content.map((item) => {
          return <NavDropLink key={item} content={item} />;
        })}
      </ul>
    </li>
  );
};

export default navLink;
