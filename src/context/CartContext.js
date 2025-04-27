'use client';
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cartItems');
    }
  }, [cartItems]);

  const addToCart = useCallback((item) => {
    const callId = `addToCart-${Date.now()}-${Math.random()}`;
    
    const quantityToSet = item.quantity || 1;
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      const toastId = `cart-${item.id}-${quantityToSet}-${callId}`;
      
      if (toast.isActive(toastId)) {
        console.log(`Toast skipped [${callId}]: toastId ${toastId} already active`);
        return prevItems;
      }

      if (existingItem) {
        const updatedItems = prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: quantityToSet } : i
        );
        toast.success(`${quantityToSet} x ${item.name} updated in cart!`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          toastId,
        });
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...item, quantity: quantityToSet }];
        toast.success(`${quantityToSet} x ${item.name} added to cart!`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          toastId,
        });
        return newItems;
      }
    });
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);