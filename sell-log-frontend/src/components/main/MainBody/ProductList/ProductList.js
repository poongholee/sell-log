import React, { Component } from "react";
import Product from "../Product";
import "./ProductList.scss";

class ProductList extends Component {
  componentWillMount() {}
  componentDidMount() {
    this._getProduct();
  }
  _callApi = () => {
    return fetch("http://192.168.43.231:4000/api/product", {
      method: "get"
    })
      .then(response => response.json())
      .then(this.state.products);
  };
  _getProduct = async () => {
    const products = await this._callApi();
    this.setState({
      products
    });
  };
  _renderProduct = () => {
    const products = this.state.products.map((product, index) => {
      if (index < 5) {
        return (
          <Product
            _id={product._id}
            thumbnailUrl={product.thumbnailUrl}
            name={product.name}
            price={product.price}
            discountRate={product.discountRate}
            minCount={product.minCount}
          />
        );
      }
    });
    return products;
  };
  state = {};
  render() {
    return (
      <div className="productListSection">
        {this.props.listTitle}
        <div className="productListInner">
          {this.state.products ? this._renderProduct() : "Loading"}
        </div>
      </div>
    );
  }
}

export default ProductList;
