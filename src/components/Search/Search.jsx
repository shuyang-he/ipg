import React, { Component } from "react";
import data from "./SearchData.js";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: "",
      display: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClose() {
    this.setState({ display: false });
  }

  render() {
    const search = (
      <div id="search-section">
        <div id="search-section-item-1" className="container">
          <form>
            <input
              type="text"
              placeholder="搜索职位名称、工作地点"
              className="g-font g-t5"
              onChange={this.handleChange}
            />
            <button type="submit">
              <img src={data.searchIcon} />
            </button>
          </form>
          <button id="close-search-section" onClick={this.handleClose}>
            <img src={data.closeIcon} />
          </button>
        </div>
        <div id="search-section-item-2" className="container">
          <p className="g-font g-t4 g-t-white">{data.title}</p>
          <div id="jobs">
            {data.content.map((item) => {
              return (
                <p className="g-font g-t5 g-t-white" key={item}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
    return this.state.display ? search : null;
  }
}

export default Search;
