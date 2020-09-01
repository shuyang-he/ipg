import React from "react";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import icon1 from "../../images/icon/核心优势icon1.svg";
import icon2 from "../../images/icon/核心优势icon2.svg";
import icon3 from "../../images/icon/核心优势3.svg";
import icon4 from "../../images/icon/核心优势icon4.svg";
import icon5 from "../../images/icon/核心优势icon5.svg";
import icon6 from "../../images/icon/核心优势icon6.svg";
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
