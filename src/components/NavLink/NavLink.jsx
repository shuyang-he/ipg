import React, { useState } from "react";
import { connect } from "react-redux";
import "./NavLink.css";
import { showDrop, hideDrop } from "../../actions/NavDropDisplay";

const navLink = ({ index, show, title, content, showDrop, hideDrop }) => {
  const navDropShow = {
    height: content.length * 40 + "px",
  };

  return (
    <li>
      <a
        className="g-font g-t3"
        onMouseEnter={() => {
          showDrop(index);
        }}
        onMouseLeave={() => {
          hideDrop(index);
        }}
      >
        {title}
      </a>
      <ul
        style={show ? navDropShow : {}}
        className="nav-drop container"
        onMouseEnter={() => {
          showDrop(index);
        }}
        onMouseLeave={() => {
          hideDrop(index);
        }}
      >
        {content.map((item, index) => {
          return (
            <li key={index}>
              <a className="nav-drop-link g-font g-t4 g-t-white">{item}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDrop: (key) => {
      dispatch(showDrop(key));
    },
    hideDrop: (key) => {
      dispatch(hideDrop(key));
    },
  };
};

export default connect(null, mapDispatchToProps)(navLink);
