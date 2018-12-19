import React, { Component } from "react";
import ProductJoin from "components/main/MainBody/ProductJoin";

import "./Product.scss";

class Product extends Component {
  onLinkImage = id => {
    let st = " /product/" + id;
    window.location.href = st;
  };
  render() {
    return (
      <div className="product">
        <div
          className="product-content"
          onClick={() => this.onLinkImage(this.props.id)}
        >
          <div className="product-image">
            <ProductImage
              image={this.props.thumbnailUrl}
              title={this.props.name}
            />
          </div>
          <div className="product-info">
            <ProductInfo
              title={this.props.name}
              price={this.props.price * (100 - this.props.discountRate) * 0.01}
            />
          </div>
        </div>
        <div className="product-join">
          <ProductJoin
            numberTotal={this.props.minCount}
            numberJoin={0}
            id={this.props.id}
          />
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
        <div className="product-price">{Math.round(this.props.price)}</div>
      </div>
    );
  }
}

export default Product;
