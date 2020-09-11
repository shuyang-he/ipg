import React from "react";
import { connect } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import data from "./ContactData.js";
import "./Contact.css";

const contact = ({ display }) => {
  const contact = (
    <div id="contact" className="container">
      <p className="g-font g-t3 g-t-dark-black">服务热线：</p>
      <div>
        {data.map((item) => {
          return (
            <ContactItem
              key={item.title}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
  return display ? contact : null;
};

const mapStateToProps = (state) => {
  return {
    display: state.phoneDisplay,
  };
};

export default connect(mapStateToProps)(contact);
