import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "constant.js";
import cookie from "react-cookies";

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
    numberJoin: this.props.numberJoin,
    id: "1"
  };
  onClickJoin = () => {
    return this.props.numberJoin < this.state.numberJoin
      ? alert("이미 참여하셨습니다.")
      : this._numberJoin();
  };
  _numberJoin = async () => {
    let userId = cookie.load("id");
    let productId = `${this.props.id}`;
    const numberJoins = await fetch(`${API_URL}/api/order/user/${userId}`).then(
      response => response.json()
    );

    numberJoins.map(numberJoin => {
      if (numberJoin.userId == userId && numberJoin.productId == productId) {
        this.state.id = "2";
      }
    });

    if (this.state.id == "2") {
      alert("이미 참여하셨습니다.");
    } else {
      this._productOrder(userId, productId);
    }
    return numberJoins;
  };
  _productOrder = async (userId, productId) => {
    await fetch(`${API_URL}/api/order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        productId
      })
    }).then(response => {
      alert("참여 완료되었습니다.");
    });
    this.setState({ numberJoin: this.state.numberJoin + 1 });
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
