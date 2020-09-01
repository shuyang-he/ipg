import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import data from "./ContactData.js";
import "./Contact.css";

const contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <p className="g-font g-t3 g-t-dark-black">服务热线：</p>
        <div>
          {data.map((item) => {
            return (
              <ContactItem
                key={item.title}
                title={item.title}
                content={item.number}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default contact;
