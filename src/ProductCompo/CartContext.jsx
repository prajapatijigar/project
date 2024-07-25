import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [counts, setCounts] = useState({}); 
  const [slugState, setSlugState] = useState();
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [product, setProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newProduct) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === newProduct.id);
    if (existingProductIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...newProduct, quantity: 1 }]);
    }
  };

  const value = {
    product, setProduct,
    counts,setCounts,
    cartItems, setCartItems,
    addToCart,
    slugState, setSlugState
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
