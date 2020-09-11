import React from "react";
import data from "./AboutUsConData.js";
import MainLink from "../MainLink/MainLink";
import "./AboutUsCon.css";

const aboutUsCon = () => {
  return (
    <div id="about-us-image">
      <img src={data.img} />
      <div id="about-us">
        <p className="main-title g-font g-t2 g-t-dark-black">{data.title}</p>
        <div>
          <p className="g-font g-t4 g-t-dark-black">{data.content1}</p>
          <p className="g-font g-t4 g-t-dark-black">{data.content2}</p>
        </div>
        <div>
          <MainLink color="g-t-dark-black" content={data.link} />
        </div>
      </div>
    </div>
  );
};

export default aboutUsCon;
