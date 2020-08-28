import React from "react";

const evaluationSection = () => {
  return (
    <div className="container">
      <div id="evaluation-section">
        <div>
          <a>
            <img src="./images/icon/滑动左.svg" />
          </a>
        </div>
        <div id="evaluation-content">
          <img src="./images/logo/客户好评-google.svg" />
          <div>
            <p className="g-font g-t3 g-t-dark-black">
              英特利普绝对是谷歌最顶尖的灵活用工合作伙伴，
            </p>
            <p className="g-font g-t3 g-t-dark-black">你们真的做得非常棒！</p>
          </div>
          <p className="g-t3 g-t-dark-black">
            - David Toste, Vendor Program Director - Google Inc
          </p>
        </div>
        <div>
          <a>
            <img src="./images/icon/滑动右.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default evaluationSection;
