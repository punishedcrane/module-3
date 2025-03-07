import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <div className="card-img-container text-center p-3" style={{ height: "200px" }}>
          <img src={product.image} className="card-img-top" alt={product.title} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.title}</h5>
          <p className="card-text flex-grow-1" style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" }}>
            {product.description}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="fs-5 fw-bold">${product.price}</span>
            <Link to={`/product/${product.id}`} className="btn btn-primary">View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductCard;