import React from "react";
import data from "./MainLinkData.js";

const mainLink = ({ content, color }) => {
  return (
    <a className="main-link">
      <p className={`g-font g-t4 ${color}`}>{content}</p>
      <img src={data.img} />
    </a>
  );
};

export default mainLink;
