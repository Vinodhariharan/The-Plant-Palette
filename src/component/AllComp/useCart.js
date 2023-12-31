import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

// Create the cart context
const CartContext = createContext();

// Use a custom hook to manage cart state and provide context
function useCart() {
  const [cartItems, setCartItems] = useState([
   
  ]);

  

  const addToCart = (product) => {
    // ... your addToCart logic
    const existingItem = cartItems.find((item) => item.link === product.link);

    if (existingItem) {
      // If the item already exists, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.link === product.link ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
    
  };
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  // console.log(cartItems);
  return { cartItems, addToCart, value: { cartItems, addToCart } };
}

// Provider component to make cart context available to children
function CartProvider({ children }) {
  const { value } = useCart();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Export the provider and custom hook
export { CartProvider, CartContext };



