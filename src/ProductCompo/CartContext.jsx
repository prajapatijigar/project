// src/ProductCompo/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState(null);



  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  const value = {
    product,
    setProduct,
    cartItems,
     addToCart
  }


  // const addToCart = () => {
  //   setCartItems(cartItems+1);
  // };


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
