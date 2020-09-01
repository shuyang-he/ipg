import React, { Component } from "react";
import searchIcon from "../../images/icon/搜索.svg";
import closeIcon from "../../images/icon/x.svg";
import "./SearchSection1.css";

class SearchSectionItem1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div id="search-section-item-1" className="container">
        <form>
          <input
            type="text"
            placeholder="搜索职位名称、工作地点"
            className="g-font g-t5"
            onChange={this.handleChange}
          />
          <button type="submit">
            <img src={searchIcon} />
          </button>
        </form>
        <button id="close-search-section">
          <img src={closeIcon} />
        </button>
      </div>
    );
  }
}

export default SearchSectionItem1;
