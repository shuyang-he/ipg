import React from "react";
import TurnPage from "../TurnPage/TurnPage";
import SolutionItem from "../SolutionItem/SolutionItem";
import prev from "../../images/icon/滑动左.svg";
import next from "../../images/icon/滑动右.svg";
import data from "./SolutionSectionData.js";
import "./SolutionSection.css";

const solutionSection = () => {
  return (
    <div id="solution-section">
      <TurnPage img={prev} />
      <div id="solution-content" className="row">
        {data.map((item) => {
          return (
            <SolutionItem
              key={item.img}
              img={item.img}
              content={item.content}
            />
          );
        })}
      </div>
      <TurnPage img={next} />
    </div>
  );
};

export default solutionSection;
