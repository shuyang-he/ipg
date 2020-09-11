import React from "react";
import MainLink from "../MainLink/MainLink";
import data from "./MainContent1Data.js";
import "./MainContent1.css";

const mainContent1 = () => {
  return (
    <div id="main-content-1">
      <p className="g-font g-t2 g-t-dark-black">{data.content}</p>
      <div>
        <MainLink color="g-t-dark-black" content={data.link} />
      </div>
    </div>
  );
};

export default mainContent1;
