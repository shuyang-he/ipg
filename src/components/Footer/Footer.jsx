import React from "react";

const footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div id="footer-logo">
          <img src="./images/logo/mainpage.png" />
        </div>
      </div>
      <div className="line footer-line container"></div>
      <div className="container">
        <div id="footer-content" className="row">
          <div className="col-12 col-md-3">
            <div id="footer-follow">
              <p className="footer-subtitle g-font g-t3 g-t-white">关注我们</p>
              <div id="footer-follow-content">
                <div className="footer-follow-item">
                  <a>
                    <img src="./images/icon/微信icon.svg" />
                  </a>
                </div>
                <div className="footer-follow-item">
                  <a>
                    <img src="./images/icon/微博icon.svg" />
                  </a>
                </div>
                <div className="footer-follow-item">
                  <a>
                    <img src="./images/icon/领英icon.svg" />
                  </a>
                </div>
                <div className="footer-follow-item">
                  <a>
                    <img src="./images/icon/facebookicon.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="footer-item">
              <p className="footer-subtitle g-font g-t3 g-t-white">解决方案</p>
              <div className="footer-item-content">
                <p className="g-font g-t4 g-t-white">灵活用工</p>
                <p className="g-font g-t4 g-t-white">高端人才寻访</p>
                <p className="g-font g-t4 g-t-white">招聘流程外包</p>
                <p className="g-font g-t4 g-t-white">海外校招</p>
                <p className="g-font g-t4 g-t-white">出海解决方案</p>
                <p className="g-font g-t4 g-t-white">管理咨询</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="footer-item">
              <p className="footer-subtitle g-font g-t3 g-t-white">行业洞察</p>
              <div className="footer-item-content">
                <p className="g-font g-t4 g-t-white">调研报告</p>
                <p className="g-font g-t4 g-t-white">白皮书</p>
                <p className="g-font g-t4 g-t-white">招聘流程外包</p>
                <p className="g-font g-t4 g-t-white">IntelliPro观点</p>
                <p className="g-font g-t4 g-t-white">SVLC 美国硅谷领导力社区</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="footer-item">
              <p className="footer-subtitle g-font g-t3 g-t-white">新闻动态</p>
              <div className="footer-item-content">
                <p className="g-font g-t4 g-t-white">活动中心</p>
                <p className="g-font g-t4 g-t-white">行业资讯</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="footer-item">
              <p className="footer-subtitle g-font g-t3 g-t-white">关于我们</p>
              <div className="footer-item-content">
                <p className="g-font g-t4 g-t-white">公司简介</p>
                <p className="g-font g-t4 g-t-white">加入我们</p>
                <p className="g-font g-t4 g-t-white">联系我们</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
