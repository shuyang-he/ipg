import React from "react";

const complimentItem = ({ img, title, content }) => {
  return (
    <div className="col-12 col-md-2">
      <div className="compliment-item">
        <div>
          <img src={img} />
        </div>
        <div>
          <p className="g-font g-t4 g-t-light-black">{title}</p>
          <p className="g-font g-t4 g-t-light-black">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default complimentItem;
