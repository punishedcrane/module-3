import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching product details: ' + error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5">
        <div className="alert alert-warning" role="alert">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/module-3" className="btn btn-outline-primary mb-4">
        &larr; Back to Products
      </Link>
      
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5 text-center p-4">
            <img 
              src={product.image} 
              className="img-fluid" 
              alt={product.title} 
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title mb-3">{product.title}</h2>
              <div className="badge bg-success mb-3 fs-6">{product.category}</div>
              <p className="card-text fs-3 fw-bold text-primary mb-3">${product.price}</p>
              <p className="card-text mb-4">{product.description}</p>
              <div className="d-flex mb-3">
                <div className="me-2">
                  <span className="fw-bold">Rating:</span> {product.rating.rate}/5
                </div>
                <div>
                  <span className="fw-bold">Reviews:</span> {product.rating.count}
                </div>
              </div>
              <button className="btn btn-primary btn-lg">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;