import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductBodyTop.scss";

class ProductBodyTop extends Component {
  onCart = () => {
    var cart = window.confirm(
      "장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?"
    );
    if (cart) {
    } else {
    }
  };
  render() {
    return (
      <div className="product-body-top">
        <div className="product-body-content">
          <section>
            <div className="thumbnail">
              <img
                className="thumbnail-content"
                src={this.props.thumbnailUrl}
              />
              <div className="item-action-buttons">
                <div className="action-button"> 좋아요 </div>
                <div className="action-button" onClick={this.onCart}>
                  장바구니
                </div>
              </div>
            </div>
            <div className="info">
              <div className="sub-info"> 전자제품 </div>
              <h1> {this.props.title} </h1>
              <div className="below">
                <div className="left">
                  <div className="people"> 현재원/전채원</div>
                  <div className="delivery"> 배송정보 </div>
                  <div className="price"> {this.props.price} 원 </div>
                </div>
                <div className="buy-button">
                  <Link to="#">공동구매</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductBodyTop;
