import React, { Component } from "react";
import ProductBodyTop from "./ProductBodyTop/ProductBodyTop";
import ProductBodyMiddle from "./ProductBodyMiddle/ProductBodyMiddle";
import ProductHead from "./ProductHead/ProductHead";
import PageTemplate from "../base/PageTemplate";

class Product extends Component {
  render() {
    return (
      <PageTemplate>
        <ProductHead />
        <ProductBodyTop /> <ProductBodyMiddle />
      </PageTemplate>
    );
  }
}
export default Product;
