import React from "react";
import data from "./AchievementItemData.js";
import "./AchievementItem.css";

const achievementItem = ({ title, content }) => {
  return (
    <div className="achievement-item col-12 col-md-6 col-lg-4">
      <img src={data.img} />
      <div className="achievement-item-content">
        <p className="g-font g-t3 g-t-dark-black">{title}</p>
        <p className="g-font g-t4 g-t-dark-black">{content}</p>
      </div>
    </div>
  );
};

export default achievementItem;
