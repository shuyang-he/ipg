import React from "react";
import MessageBoard from "../MessageBoard/MessageBoard";
import Contact from "../Contact/Contact";
import Message from "../Message/Message";
import Search from "../Search/Search";
import MainContent1 from "../MainContent1/MainContent1";
import MainContent2 from "../MainContent2/MainContent2";
import AboutUsCon from "../AboutUsCon/AboutUsCon";
import AboutUs from "../AboutUs/AboutUs";
import TopBoardCon from "../TopBannerCon/TopBannerCon";
import SolutionSection from "../SolutionSection/SolutionSection";
import MainTitleCon from "../MainTitleCon/MainTitleCon";
import Line from "../Line/Line";
import AchievementSection from "../AchievementSection/AchievementSection";
import TeamSection from "../TeamSection/TeamSection";
import AdvantageSection from "../AdvantageSection/AdvantageSection";
import DatabaseSection from "../DatabaseSection/DatabaseSection";
import ClientSection from "../ClientSection/ClientSection";
import EvaluationSection from "../EvaluationSection/EvaluationSection";
import ComplimentSection from "../ComplimentSection/ComplimentSection";

const main = () => {
  return (
    <>
      <MessageBoard />
      <Contact />
      <Message />
      <Search />
      <TopBoardCon />
      <MainContent1 />
      <Line />
      <MainContent2 />
      <AboutUsCon />
      <AboutUs />
      <MainTitleCon title={"解决方案"} />
      <SolutionSection />
      <Line />
      <MainTitleCon title={"骄人成绩"} />
      <AchievementSection />
      <Line />
      <MainTitleCon title={"精英团队"} />
      <TeamSection />
      <Line />
      <MainTitleCon title={"核心优势"} />
      <AdvantageSection />
      <MainTitleCon title={"智能化全球人才数据库"} />
      <DatabaseSection />
      <Line />
      <MainTitleCon title={"服务客户"} />
      <ClientSection />
      <EvaluationSection />
      <ComplimentSection />
    </>
  );
};

export default main;
