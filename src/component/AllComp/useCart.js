import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const CartContext = createContext();

function useCart() {
  const [cartItems, setCartItems] = useState([
   
  ]);

  

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.link === product.link);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.link === product.link ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
    
  };
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  return { cartItems, addToCart, value: { cartItems, addToCart } };
}

function CartProvider({ children }) {
  const { value } = useCart();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartProvider, CartContext };



