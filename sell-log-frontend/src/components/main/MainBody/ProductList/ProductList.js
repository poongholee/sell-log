import React, { Component } from "react";
import Product from "./Product.js";
import "./ProductList.scss";

class ProductList extends Component {
  componentWillMount() {}
  componentDidMount() {
    this._getProduct();
  }
  _getProduct = async () => {
    this.setState({
      products: [
        {
          image:
            "https://laftelimage.blob.core.windows.net/items/thumbs/large/abb669f5-2360-4062-839e-0762155bad7c.jpg",
          title: "벨제붑 아가씨",
          price: 10000
        },
        {
          image:
            "https://laftelimage.blob.core.windows.net/items/thumbs/large/c49a6485-e6e9-4a25-b7fe-378d0662f6b2.jpg",
          title: "전생했더니 슬라임",
          price: 15000
        },
        {
          image:
            "https://laftelimage.blob.core.windows.net/items/thumbs/large/abb669f5-2360-4062-839e-0762155bad7c.jpg",
          title: "벨제붑 아가씨",
          price: 10000
        },
        {
          image:
            "https://laftelimage.blob.core.windows.net/items/thumbs/large/c49a6485-e6e9-4a25-b7fe-378d0662f6b2.jpg",
          title: "전생했더니 슬라임",
          price: 15000
        },
        {
          image:
            "https://laftelimage.blob.core.windows.net/items/thumbs/large/abb669f5-2360-4062-839e-0762155bad7c.jpg",
          title: "벨제붑 아가씨",
          price: 10000
        },
        {
          image:
            "https://laftelimage.blob.core.windows.net/items/thumbs/large/c49a6485-e6e9-4a25-b7fe-378d0662f6b2.jpg",
          title: "전생했더니 슬라임",
          price: 15000
        }
      ]
    });
  };
  _renderProduct = () => {
    const products = this.state.products.map((product, index) => {
      if (index < 5) {
        return (
          <Product
            image={product.image}
            title={product.title}
            price={product.price}
            key={product.index}
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
        새로운 상품
        <div className="productListInner">
          {this.state.products ? this._renderProduct() : "Loading"}
        </div>
      </div>
    );
  }
}

export default ProductList;
