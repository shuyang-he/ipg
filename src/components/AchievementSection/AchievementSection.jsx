import React from "react";
import AchievementItem from "../AchievementItem/AchievementItem";

const AchievementSection = () => {
  return (
    <div className="container">
      <div className="row">
        <AchievementItem
          title={"人力资源沙龙"}
          content={"人力资源沙龙最佳海外人力资源服务机构"}
        />
        <AchievementItem
          title={"LinkedIn"}
          content={"2017年MSP计划服务商第二名"}
        />
        <AchievementItem
          title={"谷歌"}
          content={"2018年MSP计划人力资源服务商第一名"}
        />
        <AchievementItem
          title={"华为北美"}
          content={"2018年谷歌MSP计划人力资源服务商排名第一名"}
        />
        <AchievementItem
          title={"LinkedIn"}
          content={"2018年MSP计划人力资源服务商第二名"}
        />
        <AchievementItem
          title={"阿里巴巴"}
          content={"2017年评为最佳人力资源服务商和最具潜力的猎头机构"}
        />
        <AchievementItem
          title={"jd.com"}
          content={"评为北美top人力资源服务商"}
        />
        <AchievementItem title={"谷歌"} content={"2017年MSP计划服务商第一名"} />
      </div>
    </div>
  );
};

export default AchievementSection;
