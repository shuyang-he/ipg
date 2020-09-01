import React from "react";
import "./SolutionItem.css";

const solutionItem = ({ img, content }) => {
  return (
    <div className="col-12 col-lg-4">
      <div className="solution-section-image">
        <a>
          <div className="solution-section-image-bottom">
            <img src={img} />
            <span className="g-font g-t3 g-t-white">{content}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default solutionItem;
