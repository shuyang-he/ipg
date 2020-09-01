import React from "react";
import MainLink from "../MainLink/MainLink";
import data from "./TopBanner1Data.js";
import "./TopBanner1.css";

const topBanner1 = () => {
  return (
    <div id="top-board" className="swiper-slide">
      <div id="top-board-content" className="container">
        <p className="g-font g-t1 g-t-white">{data.title}</p>
        <p className="g-font g-t3 g-t-white">{data.content}</p>
        <div>
          <MainLink content={data.link} />
        </div>
      </div>
    </div>
  );
};

export default topBanner1;
