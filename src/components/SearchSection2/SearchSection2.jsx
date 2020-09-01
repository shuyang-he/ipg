import React from "react";
import data from "./SearchSection2Data";
import "./SearchSection2.css";

const searchSection2 = () => {
  return (
    <div id="search-section-item-2" className="container">
      <p className="g-font g-t4 g-t-white">{data.title}</p>
      <div id="jobs">
        {data.content.map((item) => {
          return (
            <p className="g-font g-t5 g-t-white" key={item}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default searchSection2;
