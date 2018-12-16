import React, { Component } from "react";

import "./ProductJoin.scss";

class ProductJoin extends Component {
  state = {
    numberJoin: this.props.numberJoin
  };
  onClickJoin = () => {
    this.setState({
      numberJoin: this.state.numberJoin + 1
    });
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
