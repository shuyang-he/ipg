import React from "react";

const solutionSection = () => {
  return (
    <div id="solution-section" className="container">
      <div className="turn-page">
        <a>
          <img src="./images/icon/滑动左.svg" />
        </a>
      </div>
      <div id="solution-content" className="row">
        <div className="col-12 col-lg-4">
          <div id="solution-flexible-con" className="solution-section-image">
            <a id="solution-flexible">
              <div className="solution-section-image-bottom">
                <img src="./images/icon/灵活用工.svg" />
                <span className="g-font g-t3 g-t-white">灵活用工</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div id="solution-talent-con" className="solution-section-image">
            <a id="solution-talent">
              <div className="solution-section-image-bottom">
                <img src="./images/icon/高端人才寻访.svg" />
                <span className="g-font g-t3 g-t-white">高端人才寻访</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div id="solution-vendor-con" className="solution-section-image">
            <a id="solution-vendor">
              <div className="solution-section-image-bottom">
                <img src="./images/icon/招聘流程外包.svg" />
                <span className="g-font g-t3 g-t-white">招聘流程外包</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="turn-page">
        <a>
          <img src="./images/icon/滑动右.svg" />
        </a>
      </div>
    </div>
  );
};

export default solutionSection;
