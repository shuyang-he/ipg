import React from "react";
import MainLink from "../MainLink/MainLink";
import data from "./AboutUsData.js";
import "./AboutUs.css";

const aboutUs = () => {
  return (
    <div id="about-us" className="container">
      <p className="main-title g-font g-t2 g-t-dark-black">{data.title}</p>
      <div>
        <p className="g-font g-t4 g-t-dark-black">{data.content1}</p>
        <p className="g-font g-t4 g-t-dark-black">{data.content2}</p>
      </div>
      <div>
        <MainLink content={data.link} />
      </div>
    </div>
  );
};

export default aboutUs;
