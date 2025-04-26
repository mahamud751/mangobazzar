'use client';
import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [productQuantities, setProductQuantities] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedQuantities = localStorage.getItem('productQuantities');
      return savedQuantities ? JSON.parse(savedQuantities) : {};
    }
    return {};
  });

  // Sync cart items with localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (cartItems.length > 0) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      } else {
        localStorage.removeItem('cartItems');
      }
    }
  }, [cartItems]);

  // Sync productQuantities with localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('productQuantities', JSON.stringify(productQuantities));
    }
  }, [productQuantities]);

  const addToCart = (item) => {
    const quantityToAdd = item.quantity || 1;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantityToAdd }
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: quantityToAdd }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setProductQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
    setProductQuantities((prev) => ({ ...prev, [itemId]: quantity }));
  };

  const setProductQuantity = (productId, quantity) => {
    setProductQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        productQuantities,
        setProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
