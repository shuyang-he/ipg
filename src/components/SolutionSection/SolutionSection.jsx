import React from "react";
import TurnPage from "../TurnPage/TurnPage";
import SolutionItem from "../SolutionItem/SolutionItem";
import data from "./SolutionSectionData.js";
import "./SolutionSection.css";

const solutionSection = () => {
  return (
    <div id="solution-section">
      <TurnPage img={data.prev} />
      <div id="solution-content" className="row">
        {data.link.map((item) => {
          return (
            <SolutionItem
              key={item.img}
              bgimg={item.bgimg}
              img={item.img}
              content={item.content}
            />
          );
        })}
      </div>
      <TurnPage img={data.next} />
    </div>
  );
};

export default solutionSection;
