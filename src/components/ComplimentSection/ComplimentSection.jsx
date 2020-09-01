import React from "react";
import data from "./ComplimentSectionData.js";
import ComplimentItem from "../ComplimentItem/ComplimentItem";
import "./ComplimentSection.css";

const complimentSection = () => {
  return (
    <div id="compliment-section" className="row">
      {data.map((item) => {
        return (
          <ComplimentItem
            key={item.img}
            img={item.img}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default complimentSection;
