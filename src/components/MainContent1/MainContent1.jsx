import React from "react";
import MainLink from "../MainLink/MainLink";

const mainContent1 = () => {
  return (
    <div id="main-content-1" className="container">
      <p className="g-font g-t2 g-t-dark-black">
        北美最大以及服务最完善的双语综合人力资源服务公司
      </p>
      <div>
        <MainLink content={"了解更多"} />
      </div>
    </div>
  );
};

export default mainContent1;
