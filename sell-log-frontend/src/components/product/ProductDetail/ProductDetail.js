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
              src={this.props.detailUrl}
              alt={this.props.name}
            />
          </div>
          <div className="detail-box">
            <ProductList listTitle="관련 상품" id={this.props.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
