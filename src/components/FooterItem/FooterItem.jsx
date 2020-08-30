import React from "react";

const footerItem = ({ title, content }) => {
  return (
    <div className="col-12 col-md-2">
      <div className="footer-item">
        <p className="footer-subtitle g-font g-t3 g-t-white">{title}</p>
        <div className="footer-item-content">
          {content.map((item) => {
            return (
              <p key={item} className="g-font g-t4 g-t-white">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default footerItem;
