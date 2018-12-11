import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeadSearch from "components/main/MainHead/MainHeadSearch";
import MainHeadInfo from "components/main/MainHead/MainHeadInfo";

import "./MainHeadTop.scss";

class MainHeadTop extends Component {
  render() {
    return (
      <div className="MainHeadTop">
        <Link to="/" className="logo">
          SELL LOG
        </Link>
        <MainHeadSearch />
        <MainHeadInfo />
      </div>
    );
  }
}

export default MainHeadTop;
