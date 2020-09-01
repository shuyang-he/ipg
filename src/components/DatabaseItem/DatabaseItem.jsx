import React from "react";
import "./DatabaseItem.css";

const databaseItem = ({ img, title }) => {
  return (
    <div className="database-item-con col-12 col-lg-6">
      <div className="database-item">
        <img src={img} />
        <p className="g-font g-t4 g-t-dark-black">{title}</p>
      </div>
    </div>
  );
};

export default databaseItem;
