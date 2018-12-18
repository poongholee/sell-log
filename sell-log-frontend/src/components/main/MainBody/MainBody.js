import React, { Component } from "react";
import ProductList from "./ProductList/ProductList.js";
import Recommend from 'components/recommend'
import "./MainBody.scss";

class MainBody extends Component {
  render() {
    return (
      <div className="MainBody">
        <ProductList listTitle="인기 또는 새로운 상품" />
        <Recommend />
      </div>
    );
  }
}

export default MainBody;
