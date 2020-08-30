import React from "react";
import TurnPage from "../TurnPage/TurnPage";
import prev from "../../images/icon/滑动左.svg";
import next from "../../images/icon/滑动右.svg";
import img1 from "../../images/logo/客户好评-google.svg";

const evaluationSection = () => {
  return (
    <div className="container">
      <div id="evaluation-section">
        <TurnPage img={prev} />
        <div id="evaluation-content">
          <img src={img1} />
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
        <TurnPage img={next} />
      </div>
    </div>
  );
};

export default evaluationSection;
