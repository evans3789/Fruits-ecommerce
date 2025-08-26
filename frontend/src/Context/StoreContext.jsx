import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  //add to cart

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  //removing from cart

  const removeCartItem = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return prev;
      }
      if (prev[itemId] === 1) {
        const updateCart = { ...prev };
        delete updateCart[itemId];
        return updateCart;
      }

      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  //context value
  const contextValue = {
    addToCart,
    removeCartItem,
    cartItems,
  };
 
  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;
