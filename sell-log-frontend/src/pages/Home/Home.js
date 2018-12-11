import React, { Component } from "react";
import PageTemplate from "components/base/PageTemplate";
import MainHead from "components/main/MainHead";
import MainFooter from "components//main/MainFooter";
import MainBody from "components/main/MainBody/MainBody";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <PageTemplate>
        <MainHead />
        <MainBody />
        <MainFooter />
      </PageTemplate>
    );
  }
}

export default Home;
