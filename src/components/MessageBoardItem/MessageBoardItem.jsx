import React from "react";
import messageBoard from "../MessageBoard/MessageBoard";
import "./MessageBoardItem.css";

const messageBoardItem = ({ img }) => {
  return (
    <li className="message-board-item">
      <a>
        <img src={img} />
      </a>
    </li>
  );
};

export default messageBoardItem;
