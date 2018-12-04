import React, { Component } from "react";
import ProductList from "./ProductList/ProductList.js";
import "./MainBody.scss";

class MainBody extends Component {
  render() {
    return (
      <div className="MainBody">
        <ProductList />
      </div>
    );
  }
}

export default MainBody;
