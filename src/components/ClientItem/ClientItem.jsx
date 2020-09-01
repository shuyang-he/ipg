import React from "react";
import "./ClientItem.css";

const clientItem = ({ icon }) => {
  return (
    <div className="client-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <img src={icon} />
    </div>
  );
};

export default clientItem;
