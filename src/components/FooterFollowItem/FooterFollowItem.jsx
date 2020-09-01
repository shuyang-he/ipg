import React from "react";
import "./FooterFollowItem.css";

const footerFollowItem = ({ img }) => {
  return (
    <div className="footer-follow-item">
      <a>
        <img src={img} />
      </a>
    </div>
  );
};

export default footerFollowItem;
