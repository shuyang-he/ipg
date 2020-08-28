import React from "react";
import ContactItem from "../ContactItem/ContactItem";

const contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <p className="g-font g-t3 g-t-dark-black">服务热线：</p>
        <div>
          <ContactItem title={"美国:"} number={"+1 (408) 200 - 9891"} />
          <ContactItem title={"中国:"} number={"0755 - 26995401"} />
          <ContactItem title={"英国:"} number={"＋44(0)7985130519"} />
        </div>
      </div>
    </div>
  );
};

export default contact;
