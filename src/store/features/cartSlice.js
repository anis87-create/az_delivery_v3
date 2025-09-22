import { createSlice } from "@reduxjs/toolkit";
/**
 * 
const cartItems = [
    {
      id: "1",
      name: "Pizza Margherita",
      price: 12.99,
      quantity: 2,
      image: "https://example.com/pizza.jpg",
      restaurantId: "rest1",
      restaurantName: "Pizzeria Roma"
    },
    {
      id: "2",
      name: "Burger Classic",
      price: 8.99,
      quantity: 1,
      image: "https://example.com/burger.jpg",
      restaurantId: "rest2",
      restaurantName: "Burger House"
    }
  ];
 */
export const cartSlice = createSlice({
    name:'cart',
    initialState: {
       cartItems: (() => {
         try {
           return JSON.parse(localStorage.getItem('cartItems')) ?? [];
         } catch {
           return [];
         }
       })()
    },
    reducers: {
       addToCart : (state, { payload }) => {
            state.cartItems.push(payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
       },
       updateQuantity: (state, {payload}) => {
           const itemFound = state.cartItems.find(item => item.id === payload.id);
           itemFound.quantity = payload?.quantity;
           localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
       },
       deleteItem : (state, { payload }) => {
          state.cartItems = state.cartItems.filter(item => item.id !== payload.id);
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
       },
       resetCart: () => {
            return {
                cartItems: []
            }
        }
    }
});

export const { addToCart, updateQuantity, resetCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;