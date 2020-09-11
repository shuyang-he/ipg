import React from "react";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import data from "./AdvantageSectionData.js";
import "./AdvantageSection.css";

const advantageSection = () => {
  return (
    <div id="advantage-section" className="row">
      {data.map((item) => {
        return (
          <AdvantageItem
            key={item.icon}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default advantageSection;
