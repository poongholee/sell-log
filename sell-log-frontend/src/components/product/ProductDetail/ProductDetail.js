import React, { Component } from "react";

import "./ProductDetail.scss";
import ProductList from "components/main/MainBody/ProductList/ProductList";

class ProductDetail extends Component {
  render() {
    return (
      <div className="product-detail">
        <div className="main">
          <div className="detail-box">
            <img
              className="detail-image-content"
              src={this.props.detailImages}
              alt={this.props.title}
            />
          </div>
          <div className="detail-box">
            <ProductList listTitle="관련상품" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
