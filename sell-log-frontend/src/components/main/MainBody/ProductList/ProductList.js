import React, { Component } from "react";
import Product from "../Product";
import "./ProductList.scss";

class ProductList extends Component {
  componentWillMount() {}
  componentDidMount() {
    this._getProduct();
  }
  _callApi = () => {
    return fetch(`http://localhost:4000/api/product/`, {
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
    console.log(this.props.id);
    const products = this.state.products.map((product, index) => {
      if (index < 5 && product._id != this.props.id) {
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
      <div className="productList">
        <div className="widget-head">
            <h2>{this.props.listTitle}</h2>
        </div>
        <div className="separator">
            <div className="violet-segment"></div>
        </div>
        <div className="productListSection"> 
            <div className="productListInner">
            {this.state.products ? this._renderProduct() : "Loading"}
            </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
