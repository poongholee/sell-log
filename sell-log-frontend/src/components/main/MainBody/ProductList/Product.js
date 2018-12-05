import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Product.scss";

class Product extends Component {
  onLinkImage = () => {
    window.location.href = "/dd";
  };
  render() {
    return (
      <div className="product">
        <div className="productImage" onClick={this.onLinkImage}>
          <ProductImage image={this.props.image} title={this.props.title} />
        </div>
        <div className="productInfo">
          <Link to={"/"} className="productLink">
            <ProductInfo title={this.props.title} price={this.props.price} />
          </Link>
        </div>
      </div>
    );
  }
}

class ProductImage extends Component {
  render() {
    return (
      <img
        className="thumnail-small"
        src={this.props.image}
        alt={this.props.title}
      />
    );
  }
}

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="productTitle">{this.props.title}</li>
          <li className="productPrice">{this.props.price}</li>
        </ul>
      </div>
    );
  }
}

export default Product;
