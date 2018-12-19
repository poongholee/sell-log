import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductBodyTop.scss";

class ProductBodyTop extends Component {
  onCart = () => {
    let cart = window.confirm(
      "장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?"
    );
    if (cart) {
    } else {
    }
  };
  state = {
    numberJoin: this.props.numberJoin
  };
  onClickJoin = () => {
    return this.props.numberJoin < this.state.numberJoin
      ? ""
      : this.setState({
          numberJoin: this.state.numberJoin + 1
        });
  };
  render() {
    return (
      <div className="product-body-top">
        <div className="product-body-content">
          <section>
            <div className="thumbnail">
              <Link to="#">
                <img
                  className="thumbnail-content"
                  src={this.props.thumbnailUrl}
                />
              </Link>
              <div className="item-action-buttons">
                <div className="action-button"> 좋아요 </div>
                <div className="action-button" onClick={this.onCart}>
                  장바구니
                </div>
              </div>
            </div>
            <div className="info">
              <div className="sub-info"> {this.props.description} </div>
              <h1> {this.props.name} </h1>
              <div className="below">
                <div className="left">
                  <div className="people">
                    {" "}
                    {this.props.minCount}/{this.state.numberJoin}
                  </div>
                  <div className="delivery">
                    <span>원가 : {this.props.price} 원</span> <br />
                    할인율 : {this.props.discountRate} %
                  </div>
                  <div className="price">
                    {" "}
                    공구가격 :{" "}
                    {Math.round(
                      this.props.price * (100 - this.props.discountRate) * 0.01
                    )}{" "}
                    원
                  </div>
                </div>
                <div className="buy-button" onClick={() => this.onClickJoin()}>
                  <Link to="#">공동구매</Link>
                </div>
              </div>
            </div>
          </section>
          <div className="buy-button-mobile" onClick={() => this.onClickJoin()}>
            <Link to="#">공동구매</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBodyTop;
