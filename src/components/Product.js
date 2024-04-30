// Product.js
import React from "react";

const Product = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
