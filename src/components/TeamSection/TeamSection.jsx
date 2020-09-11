import React from "react";
import data from "./TeamSectionData.js";
import TeamItem from "../TeamItem/TeamItem";
import "./TeamSection.css";

const teamSection = () => {
  return (
    <div id="team-section" className="row">
      <ul id="team-content" className="col-12 col-md-5">
        {data.link.map((item) => {
          return (
            <TeamItem
              key={item.title}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </ul>
      <div id="team-image-con" className="col-12 col-md-7">
        <img src={data.img} id="team-image" />
      </div>
    </div>
  );
};

export default teamSection;
