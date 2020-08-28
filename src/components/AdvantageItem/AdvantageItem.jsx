import React from "react";

const advantageItem = ({ icon, title, content }) => {
  return (
    <div className="advantage-item-con col-12 col-md-6 col-lg-4">
      <div className="advantage-item container">
        <div className="advantage-subtitle">
          <div>
            <img src={icon} />
          </div>
          <p className="g-font g-t3 g-t-dark-black">{title}</p>
        </div>
        <p className="g-font g-t4 g-t-dark-black">{content}</p>
      </div>
    </div>
  );
};

export default advantageItem;
