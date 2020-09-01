import React from "react";
import AchievementItem from "../AchievementItem/AchievementItem";
import data from "./AchievementSectionData.js";

const AchievementSection = () => {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <AchievementItem
            key={item.content}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default AchievementSection;
