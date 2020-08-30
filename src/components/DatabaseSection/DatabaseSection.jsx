import React from "react";
import DatabaseItem from "../DatabaseItem/DatabaseItem";
import data from "./DatabaseSectionData.js";

const databaseSection = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => {
          return (
            <DatabaseItem key={item.img} img={item.img} title={item.title} />
          );
        })}
      </div>
    </div>
  );
};

export default databaseSection;
