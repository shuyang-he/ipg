import React from "react";

const teamItem = ({ title, content }) => {
  return (
    <li className="team-item">
      <p className="g-font g-t3 g-t-dark-black">{title}</p>
      <p className="g-font g-t4 g-t-dark-black">{content}</p>
    </li>
  );
};

export default teamItem;
