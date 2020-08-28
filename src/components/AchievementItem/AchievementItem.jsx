import React from "react";
import icon from "../../images/icon/骄人成绩icon.svg";

const achievementItem = ({ title, content }) => {
  return (
    <div className="achievement-item col-12 col-md-6 col-lg-4">
      <img src={icon} />
      <div className="achievement-item-content">
        <p className="g-font g-t3 g-t-dark-black">{title}</p>
        <p className="g-font g-t4 g-t-dark-black">{content}</p>
      </div>
    </div>
  );
};

export default achievementItem;
