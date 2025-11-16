import { createSlice } from '@reduxjs/toolkit';

/**
 * Order slice for managing user orders state
 * Features:
 * - Add new orders
 * - Update order status
 * - Track order history
 * - Manage delivery states
 */

const initialState = {
  orders:  localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },

    updateOrderStatus: (state, {payload}) => {
      const { orderId, status } = payload;
      const index = state.orders.findIndex(restaurant => restaurant.id === orderId); 
      state.orders[index].status = status;
      state.orders[index].updatedAt = new Date().toISOString();
      localStorage.setItem('orders', JSON.stringify(state.orders))
    },
    deleteOrder: (state, {payload}) => {
      const { orderId } = payload; 
      let filteredOrders = state.orders.filter(order => order.id !== orderId);
      localStorage.setItem('orders', JSON.stringify(filteredOrders))
    },
    /**
     * Clear all orders (optional, for testing purposes)
     */
    clearOrders: (state) => {
      state.orders = [];
      localStorage.setItem('orders', state.orders);
    },
  },
});

export const { addOrder, updateOrderStatus, clearOrders, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
