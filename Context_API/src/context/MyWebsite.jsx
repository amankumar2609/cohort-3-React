import { useState } from "react";
import { createContext } from "react";

export const MyStore = createContext();

export const MyStoreContextProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider
      value={{ isCardOpen, setIsCardOpen, setCartItems, cartItems }}
    >
      {children}
    </MyStore.Provider>
  );
};
