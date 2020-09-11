import React, { Component } from "react";
import { connect } from "react-redux";
import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      name: "",
      number: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const message = (
      <div id="message" className="container">
        <p className="g-font g-t3 g-t-dark-black">请您留言：</p>
        <form>
          <textarea
            type="text"
            placeholder="请在此输入留言内容，我们会尽快联系您（必填）"
            className="g-font g-t6"
            onChange={this.handleChange}
          ></textarea>
          <input
            type="text"
            placeholder="姓名"
            className="g-font g-t6"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="电话（必填）"
            className="g-font g-t6"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="邮箱"
            className="g-font g-t6"
            onChange={this.handleChange}
          />
          <button type="submit" className="g-font g-t6">
            提交
          </button>
        </form>
      </div>
    );
    return this.props.display ? message : null;
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.messageDisplay,
  };
};

export default connect(mapStateToProps)(Message);
