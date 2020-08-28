import React from "react";

const contactItem = ({ title, number }) => {
  return (
    <>
      <p className="g-font g-t4 g-t-blue">{title}</p>
      <p className="g-font g-t4 g-t-dark-black">{number}</p>
    </>
  );
};

export default contactItem;
