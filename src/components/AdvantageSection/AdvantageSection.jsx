import React from "react";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import icon1 from "../../images/icon/核心优势icon1.svg";
import icon2 from "../../images/icon/核心优势icon2.svg";
import icon3 from "../../images/icon/核心优势3.svg";
import icon4 from "../../images/icon/核心优势icon4.svg";
import icon5 from "../../images/icon/核心优势icon5.svg";
import icon6 from "../../images/icon/核心优势icon6.svg";

const advantageSection = () => {
  return (
    <div className="container">
      <div id="advantage-section" className="row">
        <AdvantageItem
          icon={icon1}
          title={`地域优势：
                ${(<br />)}
                全球布局，深耕海外`}
          content={`集团总部位于美国硅谷，在纽约，西雅图，温哥华，伦敦，新加坡，北京，深圳，
          上海，武汉，新德里等核心城市均设有分公司，员工及服务范围覆盖全球`}
        />
        <AdvantageItem
          icon={icon2}
          title={`技术优势：
          ${(<br />)}
          人才大数据+人工智能`}
          content={`每日更新已拥有的1.6亿+美国及世界精英人才数据库，
          集团旗下海搜科技AI技术已实现快速精准的人才匹配`}
        />
        <AdvantageItem
          icon={icon3}
          title={`规模优势+运营能力`}
          content={`集团400+员工遍布全球各大核心城市，为世界一流企业提供全方位、专业、高效的人资服务及保障`}
        />
        <AdvantageItem
          icon={icon4}
          title={`高质量的团队`}
          content={`管理及技术团队均来自全球知名高科技公司
          硅谷技术团队150+人，其中博士30%，硕士70%`}
        />
        <AdvantageItem
          icon={icon5}
          title={`超一流企业客户`}
          content={`我们的客户包括Google，Apple，Amazon，Airbnb，LinkedIn，阿里，腾讯，百度，字节跳动，京东
          等世界超一流企业`}
        />
        <AdvantageItem
          icon={icon6}
          title={`一站式解决方案`}
          content={`以灵活且具个性化的形式，专业且高效的提供全方位服务、招聘方案及用工模式，
          更加精准满足客户要求`}
        />
      </div>
    </div>
  );
};

export default advantageSection;
