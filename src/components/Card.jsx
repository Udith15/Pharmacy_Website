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
  };

  return (
    <div className="card product-card">
      <img src={imgpath} className="card-img-top" alt={title} />
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
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <img src={imgpath} className="img-fluid" alt={title} />
                  </div>
                  <div className="col-md-6">
                    <h4>{title}</h4>
                    <p>Price: {price}</p>
                    <div className="quantity-control mb-3">
                      <button 
                        className="btn btn-outline-secondary" 
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      >
                        -
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button 
                        className="btn btn-outline-secondary" 
                        onClick={() => setQuantity(q => q + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="btn btn-success w-100" 
                      onClick={handleAddToCart}
                    >
                      Add to Cart ({quantity})
                    </button>
                    <div className="product-details mt-3">
                      <p>Delivery: Tomorrow 10AM</p>
                      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
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