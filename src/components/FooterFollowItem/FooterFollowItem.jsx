import React from "react";

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
