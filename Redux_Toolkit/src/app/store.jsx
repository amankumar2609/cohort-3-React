import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice";
import cartReducer from "../feature/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
