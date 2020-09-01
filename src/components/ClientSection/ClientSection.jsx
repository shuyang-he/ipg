import React from "react";
import ClientItem from "../ClientItem/ClientItem";
import imgs from "./ClientSectionData.js";

const ClientSection = () => {
  return (
    <div className="row">
      {imgs.map((img) => {
        return <ClientItem key={img} icon={img} />;
      })}
    </div>
  );
};

export default ClientSection;
