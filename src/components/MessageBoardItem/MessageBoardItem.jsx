import React from "react";
import messageBoard from "../MessageBoard/MessageBoard";
import "./MessageBoardItem.css";

const messageBoardItem = ({ img }) => {
  return (
    <li className="message-board-item" id="message-board-phone">
      <a>
        <img src={img} />
      </a>
    </li>
  );
};

export default messageBoardItem;
