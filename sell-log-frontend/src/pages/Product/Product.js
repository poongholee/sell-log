import React, { Component } from "react";
import ProductBody from "components/product/ProductBody/ProductBody";
import PageTemplate from "components/base/PageTemplate";
import MainHead from "components/main/MainHead";

class Product extends Component {
  render() {
    return (
      <PageTemplate>
        <div>
          <MainHead />
          <ProductBody />
        </div>
      </PageTemplate>
    );
  }
}
export default Product;
