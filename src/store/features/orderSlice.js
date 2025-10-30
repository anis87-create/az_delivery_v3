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

    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const order = state.orders.find(order => order.id === orderId);
       
      if (order) {
        order.status = newStatus;
        order.updatedAt = new Date().toISOString();
      }

      

      localStorage.setItem('orders', JSON.stringify(state.orders))
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

export const { addOrder, updateOrderStatus, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
