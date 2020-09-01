import React from "react";
import FooterFollowItem from "../FooterFollowItem/FooterFollowItem";
import logo from "../../images/logo/mainpage.png";
import data from "./FooterData.js";
import FooterItem from "../FooterItem/FooterItem";
import "./Footer.css";

const footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div id="footer-logo">
          <img src={logo} />
        </div>
      </div>
      <div className="line footer-line container"></div>
      <div className="container">
        <div id="footer-content" className="row">
          <div className="col-12 col-md-3">
            <div id="footer-follow">
              <p className="footer-subtitle g-font g-t3 g-t-white">关注我们</p>
              <div id="footer-follow-content">
                {data.footerFollowItem.imgs.map((item) => {
                  return <FooterFollowItem key={item} img={item} />;
                })}
              </div>
            </div>
          </div>
          {data.footerItem.map((item) => {
            return (
              <FooterItem
                key={item.title}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default footer;
