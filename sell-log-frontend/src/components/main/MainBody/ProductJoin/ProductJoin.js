import React from "react";

import "./ProductJoin.scss";

const ProductJoin = ({ numberTotal, numberJoin, onJoin }) => {
  return (
    <div className="product-join-content">
      참여하기 {numberTotal} / {numberJoin}
    </div>
  );
};

ProductJoin.defaultProps = {
  numberTotal: 1,
  numberJoin: 0
};

export default ProductJoin;
