import React from "react";
import img from "../../images/icon/箭头.svg";

const mainLink = ({ content }) => {
  return (
    <a className="main-link">
      <p className="g-font g-t4 g-t-dark-black">{content}</p>
      <img src={img} />
    </a>
  );
};

export default mainLink;
