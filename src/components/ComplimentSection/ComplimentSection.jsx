import React from "react";
import data from "./ComplimentSectionData.js";
import ComplimentItem from "../ComplimentItem/ComplimentItem";

const complimentSection = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default complimentSection;
