import React from "react";
import MainLink from "../MainLink/MainLink";

const aboutUs = () => {
  return (
    <div className="container">
      <div id="about-us" className="container">
        <p className="main-title g-font g-t2 g-t-dark-black">关于我们</p>
        <div>
          <p className="g-font g-t4 g-t-dark-black">
            英特利普集团创立于2009年，总部位于美国硅谷，是一家以科技数据驱动的顶尖人才生态管理咨
            询及人力资源解决方案供应商。
          </p>
          <p className="g-font g-t4 g-t-dark-black">
            集团致力于打造全球高端人才生态平台，通过结合硅谷以及世界顶尖人才的智慧与经验，在全球化
            时代下，为企业赋予增长动力，提供发展战略管理咨询以及全球人力资源服务。
          </p>
        </div>
        <div>
          <MainLink content={"了解更多"} />
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
