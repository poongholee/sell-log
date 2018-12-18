import React, { Component } from "react";
import ProductBodyTop from "components/product/ProductBodyTop/ProductBodyTop.js";
import ProductBodyDetail from "components/product/ProductDetail/ProductDetail.js";
import "./ProductBody.scss";
class ProductBody extends Component {
  componentDidMount() {
    this._getProduct();
  }
  _callApi = () => {
    let callUrl = "http://192.168.43.231:4000/api/product/" + this.props.id;
    console.log(callUrl);
    return fetch(callUrl, {
      method: "get"
    })
      .then(response => response.json())
      .then(this.state.product);
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
          thumbnailUrl={product.thumbnailUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          discountRate={product.discountRate}
          minCount={product.minCount}
        />
        <ProductBodyDetail detailUrl={product.detailUrl} name={product.name} />
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
