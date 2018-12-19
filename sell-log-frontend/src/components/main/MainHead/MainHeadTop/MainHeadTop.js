import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeadSearch from "components/main/MainHead/MainHeadSearch";
import MainHeadInfo from "components/main/MainHead/MainHeadInfo";
import logo from 'static/images/sell-logo.png';
import "./MainHeadTop.scss";

class MainHeadTop extends Component {
  render() {
    return (
      <div className="MainHeadTop">
        <div className="inner_wrap">
            <h1>
                <Link to="/" className="logo">
                    SELL LOG
                </Link>
            </h1>        
            <MainHeadSearch />
            <MainHeadInfo />
        </div>
      </div>
    );
  }
}

export default MainHeadTop;
