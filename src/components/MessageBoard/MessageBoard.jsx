import React from "react";
import MessageBoardItem from "../MessageBoardItem/MessageBoardItem";
import data from "./MessageBoardData.js";
import "./MessageBoard.css";

const messageBoard = () => {
  return (
    <ul id="message-board">
      {data.map((item) => {
        return <MessageBoardItem key={item} img={item} />;
      })}
    </ul>
  );
};

export default messageBoard;
