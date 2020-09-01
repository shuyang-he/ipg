import React from "react";
import data from "./MainContent2Data.js";
import MainContent2Item from "../MainContent2Item/MainContent2Item";
import "./MainContent2.css";

const mainContent2 = () => {
  return (
    <div id="main-content-2" className="row">
      {data.map((item) => {
        return (
          <MainContent2Item
            key={item.title}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default mainContent2;
