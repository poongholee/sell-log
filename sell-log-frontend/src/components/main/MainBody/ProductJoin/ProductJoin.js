import React, { Component } from "react";
import { API_URL } from "constant.js";
import "./ProductJoin.scss";
import cookie from "react-cookies";

class ProductJoin extends Component {
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
      <div className="product-join-content" onClick={() => this.onClickJoin()}>
        참여하기 {this.props.numberTotal} / {this.state.numberJoin}
      </div>
    );
  }
}

ProductJoin.defaultProps = {
  numberTotal: 1,
  numberJoin: 0
};

export default ProductJoin;
