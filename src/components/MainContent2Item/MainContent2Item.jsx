import React from "react";
import "./MainContent2Item.css";

const mainContent2Item = ({ title, content }) => {
  return (
    <div className="main-content-2-items col-6 col-md-3">
      <p>{title}</p>
      <p className="g-font g-t3 g-t-dark-black">{content}</p>
    </div>
  );
};

export default mainContent2Item;
