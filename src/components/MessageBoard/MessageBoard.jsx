import React from "react";
import MessageBoardItem from "../MessageBoardItem/MessageBoardItem";
import phone from "../../images/message board/phone.svg";
import message from "../../images/message board/message.svg";
import top from "../../images/message board/top.svg";

const messageBoard = () => {
  return (
    <ul id="message-board">
      <MessageBoardItem img={phone} />
      <MessageBoardItem img={message} />
      <MessageBoardItem img={top} />
    </ul>
  );
};

export default messageBoard;
