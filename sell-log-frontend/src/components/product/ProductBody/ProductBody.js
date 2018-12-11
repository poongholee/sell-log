import React, { Component } from "react";
import ProductBodyTop from "components/product/ProductBodyTop/ProductBodyTop.js";
import ProductBodyDetail from "components/product/ProductDetail/ProductDetail.js";
import "./ProductBody.scss";
class ProductBody extends Component {
  componentDidMount() {
    this._getProduct();
  }
  _getProduct = async () => {
    this.setState({
      products: [
        {
          title: "전생했더니 슬라임",
          category: "전자제품",
          price: 15000,
          titleImage:
            "https://laftelimage.blob.core.windows.net/items/thumbs/large/c49a6485-e6e9-4a25-b7fe-378d0662f6b2.jpg",
          detailImages:
            "http://ngcp-s3-seoul-img-prd.s3.amazonaws.com/StudioD-BUTTER/FT0418045.jpg",
          number: 10,
          minimum: 30
        }
      ]
    });
  };
  _renderProduct = () => {
    const products = this.state.products.map((product, index) => {
      return (
        <div className="ProductBody">
          <ProductBodyTop
            titleImage={product.titleImage}
            title={product.title}
            category={product.category}
            price={product.price}
          />
          <ProductBodyDetail
            detailImages={product.detailImages}
            title={product.title}
          />
        </div>
      );
    });
    return products;
  };
  _isProduct = () => {
    return this.state.products ? this._renderProduct() : "Loading";
  };
  state = {};
  render() {
    return this._isProduct();
  }
}

export default ProductBody;
