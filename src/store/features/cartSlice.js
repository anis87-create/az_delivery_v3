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
       cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? []
    },
    reducers: {
       addToCart : (state, { payload }) => {
            state.cartItems.push(payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
       },
       updateQuantity: (state, {payload}) => {
           
       }
    }
});

export const {addToCart, updateQuantity} = cartSlice.actions;

export default cartSlice.reducer;