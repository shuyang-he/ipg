import React from "react";

const teamSection = () => {
  return (
    <div className="container">
      <div id="team-section" className="row">
        <ul id="team-content" className="col-12 col-md-5">
          <li className="team-item">
            <p className="g-font g-t3 g-t-dark-black">01</p>
            <p className="g-font g-t4 g-t-dark-black">
              北美最大以及服务最完善的双语综合人力资源服务公司。
            </p>
          </li>
          <li className="team-item">
            <p className="g-font g-t3 g-t-dark-black">02</p>
            <p className="g-font g-t4 g-t-dark-black">
              英特利普集团总部位于美国硅谷，并在纽约，西雅图，温哥华，北京，上海，深圳，武汉，新德里等城市均
              设有分公司。员工及服务范围覆盖全球。
            </p>
          </li>
          <li className="team-item">
            <p className="g-font g-t3 g-t-dark-black">03</p>
            <p className="g-font g-t4 g-t-dark-black">
              集团现有400余名员工，其中包括数位名合伙人、100余名资深顾问、35支专业小组。外派员工超过2000人。
            </p>
          </li>
          <li className="team-item">
            <p className="g-font g-t3 g-t-dark-black">04</p>
            <p className="g-font g-t4 g-t-dark-black">
              我们的员工及服务范围涵盖北美20个州。
            </p>
          </li>
        </ul>
        <div id="team-image-con" className="col-12 col-md-7">
          <img src="./images/background/Artboard.png" id="team-image" />
        </div>
      </div>
    </div>
  );
};

export default teamSection;
