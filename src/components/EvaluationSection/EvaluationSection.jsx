import React from "react";
import TurnPage from "../TurnPage/TurnPage";
import data from "./EvaluationSectionData.js";
import "./EvaluationSection.scss";

const evaluationSection = () => {
  return (
    <div id="evaluation-section">
      <TurnPage img={data.prev} />
      <div id="evaluation-content">
        <img src={data.icon} />
        <div>
          <p className="g-font g-t3 g-t-dark-black">{data.content1}</p>
          <p className="g-font g-t3 g-t-dark-black">{data.content2}</p>
        </div>
        <p className="g-t3 g-t-dark-black">{data.content3}</p>
      </div>
      <TurnPage img={data.next} />
    </div>
  );
};

export default evaluationSection;
