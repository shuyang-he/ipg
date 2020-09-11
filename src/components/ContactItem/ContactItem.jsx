import React from "react";

const contactItem = ({ title, content }) => {
  return (
    <>
      <p className="g-font g-t4 g-t-blue">{title}</p>
      <p className="g-font g-t4 g-t-dark-black">{content}</p>
    </>
  );
};

export default contactItem;
