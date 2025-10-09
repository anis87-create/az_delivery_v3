import { createSlice, current } from "@reduxjs/toolkit";

/**
 * Redux slice for managing shopping cart state
 * Handles cart items, quantities, and localStorage persistence
 */
/**
 * Example cart item structure:
 * {
 *   id: string,
 *   name: string,
 *   price: number,
 *   quantity: number,
 *   image: string,
 *   restaurantId: string
 * }
 */
export const cartSlice = createSlice({
    name:'cart',
    initialState: {
       // Load cart items from localStorage with error handling
       cartItems: (() => {
         try {
           return JSON.parse(localStorage.getItem('cartItems')) ?? [];
         } catch {
           return [];
         }
       }
      )(),
      // Load subtotal from localStorage
      subTotalPrice: localStorage.getItem('subTotalPrice')
    },
    reducers: {
       /**
        * Add a new item to the cart
        * @param {Object} payload - Cart item to add
        */
       addToCart : (state, { payload }) => {
            state.cartItems.push(payload);
            // Persist to localStorage
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
       },
       /**
        * Update quantity of an existing cart item
        * @param {Object} payload - Item with updated quantity
        */
       updateQuantity: (state, {payload}) => {
           const itemFound = state.cartItems.find(item => item.id === payload.id);
           if (itemFound) {
               itemFound.quantity = payload?.quantity;
               // Persist to localStorage
               localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
           }
       },
       /**
        * Remove an item from the cart
        * @param {Object} payload - Item to remove
        */
       deleteItem : (state, { payload }) => {
          state.cartItems = state.cartItems.filter(item => item.id !== payload.id);
          // Persist to localStorage
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
       },
       /**
        * Clear all items from the cart and reset state
        */
       resetCart: (state) => {
            // Clear localStorage
            localStorage.setItem('cartItems', JSON.stringify([]));
            localStorage.setItem('subTotalPrice', 0);
            // Reset state
            state.cartItems = [];
            state.subTotalPrice = 0;
        },
        /**
         * Calculate and update the subtotal price
         * Should be called after any cart modification
         */
        getSubTotalPrice: (state) => {
          const sum = state.cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0);
          state.subTotalPrice = sum;
          // Persist subtotal to localStorage
          localStorage.setItem('subTotalPrice', state.subTotalPrice);
        }
    }
});

export const { addToCart, updateQuantity, resetCart, deleteItem, getSubTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;