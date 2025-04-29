import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Card.css';

const Card = ({ title, price, imgpath }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const modalId = `modal-${String(title).replace(/\s+/g, '-').toLowerCase()}`;

  const handleAddToCart = () => {
    addToCart({
      title,
      price: parseFloat(price.replace('$', '')),
      imgpath,
      quantity
    });
    setQuantity(1);
    alert("Product added to cart!");
  };

  return (
    <div className="card product-card" >
      <div className="image-class">
      <img src={imgpath} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: {price}</p>
        
        <button 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target={`#${modalId}`}
        >
          View Details
        </button>

        {/* Product Modal */}
        <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
  <div className="modalsec1 col-md-6 d-flex justify-content-center align-items-center">
    <img src={imgpath} className="img-fluid p-3" alt={title} />
  </div>
  <div className="modalsec2 col-md-6 p-4">
    <h4 className="fw-bold">{title}</h4>
    <p className="text-muted">Brand: <strong>Generic Co.</strong></p>
      <p className="text-success mt-3"><strong>In Stock</strong></p>
    <div className="mb-2">
      <span className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
      <span className="ms-2">(120 reviews)</span>
    </div>
    <h5 className="text-danger mb-3">Price: {price}</h5>

    <ul>
      <li>Fast delivery by tomorrow 10AM</li>
      <li>7-day return policy</li>
      <li>1-year warranty</li>
      <li>Cash on Delivery available</li>
    </ul>

    <div className="quantity-control my-3 d-flex align-items-center">
      <button 
        className="btn btn-outline-secondary me-2" 
        onClick={() => setQuantity(q => Math.max(1, q - 1))}
      >−</button>
      <span className="fs-5">{quantity}</span>
      <button 
        className="btn btn-outline-secondary ms-2" 
        onClick={() => setQuantity(q => q + 1)}
      >+</button>
    </div>

    <button 
      className="w-100"
      onClick={handleAddToCart}
    >Add to Cart ({quantity})</button>

  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
