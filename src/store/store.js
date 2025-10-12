import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import  cartSlice  from "./features/cartSlice";
import  commentSlice  from "./features/commentSlice";
import orderSlice from "./features/orderSlice";
import  favoritesSlice  from "./features/favoritesSlice";

export const store = configureStore({
  reducer: {
      auth: authSlice,
      cart: cartSlice,
      comment: commentSlice,
      order: orderSlice,
      favorites: favoritesSlice
   }
}) 

