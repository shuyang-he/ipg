import React from "react";
import TurnPage from "../TurnPage/TurnPage";
import prev from "../../images/icon/滑动左.svg";
import next from "../../images/icon/滑动右.svg";
import img1 from "../../images/logo/客户好评-google.svg";
import data from "./EvaluationSectionData.js";
import "./EvaluationSection.css";

const evaluationSection = () => {
  return (
    <div id="evaluation-section">
      <TurnPage img={prev} />
      <div id="evaluation-content">
        <img src={img1} />
        <div>
          <p className="g-font g-t3 g-t-dark-black">{data.content1}</p>
          <p className="g-font g-t3 g-t-dark-black">{data.content2}</p>
        </div>
        <p className="g-t3 g-t-dark-black">{data.content3}</p>
      </div>
      <TurnPage img={next} />
    </div>
  );
};

export default evaluationSection;
