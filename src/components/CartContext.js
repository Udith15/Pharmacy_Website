import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.title === product.title);
      if (existingItem) {
        return prevCart.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (title) => {
    setCart(prevCart => prevCart.filter(item => item.title !== title));
  };

  const updateQuantity = (title, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    localStorage.setItem(Date.now(), JSON.stringify([newOrder]));
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      orders,
      addToCart,
      removeFromCart,
      updateQuantity,
      placeOrder
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}