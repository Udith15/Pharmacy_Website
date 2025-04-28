import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage = () => {
  const { cart, orders, removeFromCart, updateQuantity, placeOrder } = useCart();

  const calculateTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Current Cart */}
        <div className="col-lg-8">
          <h2 className="mb-4">Your Shopping Cart</h2>
          {cart.length === 0 ? (
            <div className="alert alert-info">Your cart is empty</div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.title} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={item.imgpath} className="img-fluid rounded-start" alt={item.title} />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">{item.title}</h5>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFromCart(item.title)}
                          >
                            ×
                          </button>
                        </div>
                        <p className="card-text">${item.price.toFixed(2)} each</p>
                        <div className="d-flex align-items-center">
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.title, item.quantity - 1)}
                          >
                            −
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.title, item.quantity + 1)}
                          >
                            +
                          </button>
                          <span className="ms-auto fw-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cart-summary p-3 bg-light rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Total:</h4>
                  <h4 className="mb-0">${calculateTotal()}</h4>
                </div>
                <button 
                  className="btn btn-primary w-100 mt-3 py-2"
                  onClick={placeOrder}
                  disabled={cart.length === 0}
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order History */}
        <div className="col-lg-4">
          <h2 className="mb-4">Order History</h2>
          {orders.length === 0 ? (
            <div className="alert alert-info">No past orders</div>
          ) : (
            <div className="order-history">
              {orders.map(order => (
                <div key={order.id} className="card mb-3">
                  <div className="card-header">
                    <h5>Order #{order.id}</h5>
                    <small className="text-muted">{order.date}</small>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      {order.items.map(item => (
                        <li key={`${order.id}-${item.title}`} className="mb-2">
                          {item.title} × {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex justify-content-between fw-bold">
                      <span>Total:</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;