import React from "react";

const topBanner1 = () => {
  return (
    <div id="top-board" className="swiper-slide">
      <div id="top-board-content" className="container">
        <p className="g-font g-t1 g-t-white">
          英特利普集团
          <br />
          全球综合人才解决方案供应商
        </p>
        <p className="g-font g-t3 g-t-white">
          IntelliPro Group Inc.
          <br />
          Global Integrated Talent Solution Provider
        </p>
        <div>
          <a className="main-link">
            <p className="g-font g-t4 g-t-white">联系我们</p>
            <img src="./images/icon/箭头.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default topBanner1;
