import React from "react";
import SearchSection1 from "../SearchSection1/SearchSection1";
import SearchSection2 from "../SearchSection2/SearchSection2";
import "./Search.css";

const search = () => {
  return (
    <div id="search-section">
      <SearchSection1 />
      <SearchSection2 />
    </div>
  );
};

export default search;
