import React, { Component } from "react";
import ProductBodyTop from "components/product/ProductBodyTop/ProductBodyTop.js";
import ProductBodyDetail from "components/product/ProductDetail/ProductDetail.js";
import { API_URL } from "constant.js";
import "./ProductBody.scss";
class ProductBody extends Component {
  componentDidMount() {
    this._getProduct();
  }
  _callApi = () => {
    return fetch(`${API_URL}/api/product/${this.props.id}`, {
      method: "get"
    }).then(response => response.json());
  };
  _getProduct = async () => {
    const product = await this._callApi();
    this.setState({
      product
    });
  };
  _renderProduct = product => {
    return (
      <div className="ProductBody">
        <ProductBodyTop
          id={product._id}
          thumbnailUrl={product.thumbnailUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          discountRate={product.discountRate}
          minCount={product.minCount}
          numberJoin={0}
        />
        <ProductBodyDetail
          detailUrl={product.detailUrl}
          name={product.name}
          id={product._id}
        />
      </div>
    );
  };
  _isProduct = () => {
    return this.state.product
      ? this._renderProduct(this.state.product)
      : "Loading";
  };
  state = {};
  render() {
    return this._isProduct();
  }
}

export default ProductBody;
