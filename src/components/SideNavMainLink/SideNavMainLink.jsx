import React from "react";
import { connect } from "react-redux";
import { handleSideDropDisplay } from "../../actions/SideNavDropDisplay";
import "./SideNavMainLink.css";

const sideNavMainLink = ({
  index,
  show,
  title,
  imgShow,
  imgNone,
  content,
  handleSideDropDisplay,
}) => {
  const navDropShow = {
    height: content.length * 35 + "px",
  };

  return (
    <li className="side-main-link">
      <div
        className="side-main-link-container"
        onClick={() => {
          handleSideDropDisplay(show, index);
        }}
      >
        <a className="g-font g-t3 g-t-white">{title}</a>
        {imgShow === "" ? null : show ? null : <img src={imgShow} />}
        {imgNone === "" ? null : show ? <img src={imgNone} /> : null}
      </div>
      <ul style={show ? navDropShow : {}} className="side-nav-drop container">
        {content.map((item, index) => {
          return (
            <li key={index}>
              <a className="side-nav-drop-link g-font g-t3 g-t-white">{item}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSideDropDisplay: (show, key) => {
      dispatch(handleSideDropDisplay(show, key));
    },
  };
};

export default connect(null, mapDispatchToProps)(sideNavMainLink);
