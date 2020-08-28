import React from "react";
import ClientItem from "../ClientItem/ClientItem";
import google from "../../images/logo/google.svg";
import apple from "../../images/logo/apple.svg";
import amazon from "../../images/logo/amazon.svg";
import linkedin from "../../images/logo/linkedin.svg";
import airbnb from "../../images/logo/airbnb.svg";
import snapchat from "../../images/logo/snapchat.svg";
import adobe from "../../images/logo/adobe.svg";
import samsung from "../../images/logo/samsung.svg";
import waymo from "../../images/logo/waymo.svg";
import cruise from "../../images/logo/cruise.svg";
import tencent from "../../images/logo/腾讯.svg";
import baidu from "../../images/logo/百度.svg";
import bytedance from "../../images/logo/字节.svg";
import jd from "../../images/logo/京东.svg";
import kuaishou from "../../images/logo/快手.svg";

const ClientSection = () => {
  return (
    <div className="container">
      <div className="row">
        <ClientItem icon={google} />
        <ClientItem icon={apple} />
        <ClientItem icon={amazon} />
        <ClientItem icon={linkedin} />
        <ClientItem icon={airbnb} />
        <ClientItem icon={snapchat} />
        <ClientItem icon={adobe} />
        <ClientItem icon={samsung} />
        <ClientItem icon={waymo} />
        <ClientItem icon={cruise} />
        <ClientItem icon={tencent} />
        <ClientItem icon={baidu} />
        <ClientItem icon={bytedance} />
        <ClientItem icon={jd} />
        <ClientItem icon={kuaishou} />
        <ClientItem icon={tencent} />
        <ClientItem icon={baidu} />
        <ClientItem icon={bytedance} />
        <ClientItem icon={jd} />
        <ClientItem icon={kuaishou} />
        <div className="client-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src="./images/logo/pinterest.svg" />
        </div>
        <div className="client-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src="./images/logo/阿里.svg" />
        </div>
        <div className="client-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src="./images/logo/华为.svg" />
        </div>
        <div className="client-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src="./images/logo/didi.svg" />
        </div>
        <div className="client-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img src="./images/logo/美团.svg" />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
