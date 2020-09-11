import React from "react";
import { connect } from "react-redux";
import MessageBoardItem from "../MessageBoardItem/MessageBoardItem";
import data from "./MessageBoardData.js";
import "./MessageBoard.css";
import { handlePhoneDisplay } from "../../actions/PhoneDisplay";
import { handleMessageDisplay } from "../../actions/MessageDisplay";

const messageBoard = ({
  phoneDisplay,
  messageDisplay,
  handlePhone,
  handleMessage,
}) => {
  return (
    <ul id="message-board">
      <li className="message-board-item">
        <a
          onClick={() => {
            console.log(phoneDisplay);
            handlePhone(phoneDisplay);
          }}
        >
          <img src={data[0]} />
        </a>
      </li>
      <li className="message-board-item">
        <a
          onClick={() => {
            handleMessage(messageDisplay);
          }}
        >
          <img src={data[1]} />
        </a>
      </li>
      <li className="message-board-item">
        <a href="#top-board">
          <img src={data[2]} />
        </a>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    messageDisplay: state.messageDisplay,
    phoneDisplay: state.phoneDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePhone: (phoneDisplay) => {
      dispatch(handlePhoneDisplay(phoneDisplay));
    },
    handleMessage: (messageDisplay) => {
      dispatch(handleMessageDisplay(messageDisplay));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(messageBoard);
