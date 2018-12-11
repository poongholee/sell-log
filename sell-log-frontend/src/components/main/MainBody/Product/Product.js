import React, { Component } from "react";
import ProductJoin from "components/main/MainBody/ProductJoin";

import "./Product.scss";

class Product extends Component {
  onLinkImage = () => {
    window.location.href = "product";
  };
  render() {
    return (
      <div className="product">
        <div className="product-content" onClick={this.onLinkImage}>
          <div className="product-image">
            <ProductImage image={this.props.image} title={this.props.title} />
          </div>
          <div className="product-info">
            <ProductInfo title={this.props.title} price={this.props.price} />
          </div>
        </div>
        <div className="product-join">
          <ProductJoin numberTotal="10" />
        </div>
      </div>
    );
  }
}

class ProductImage extends Component {
  render() {
    return (
      <img
        className="thumbnail-small"
        src={this.props.image}
        alt={this.props.title}
      />
    );
  }
}

class ProductInfo extends Component {
  render() {
    return (
      <div className="product-info-content">
        <div className="product-title">{this.props.title}</div>
        <div className="product-price">{this.props.price}</div>
      </div>
    );
  }
}

export default Product;
