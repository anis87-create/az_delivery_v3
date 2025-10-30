import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: (() => {
            try {
                const storedItems = localStorage.getItem('items');
                return storedItems ? JSON.parse(storedItems) : [];
            } catch (error) {
                console.warn('Failed to parse items from localStorage:', error);
                return [];
            }
        })()
    },
    reducers: {
       addItem: (state, {payload}) => {
         state.items.push(payload);
         localStorage.setItem('items', JSON.stringify(state.items));
       },
       removeItem: (state, {payload}) => {
         state.items = state.items.filter(item => item.id !== payload.id);
         localStorage.setItem('items', JSON.stringify(state.items)); 
       },
       updateItem: (state, {payload}) => {
         const index = state.items.findIndex(item => item.id === payload.id);
         state.items[index]= {...payload};
         localStorage.setItem('items', JSON.stringify(state.items));
       },
       resetItems: (state) => {
          state.items = [];
          localStorage.setItem('items', JSON.stringify(state.items));
       }

    }
});
export const { addItem, removeItem, updateItem, resetItems } = itemsSlice.actions;
export default itemsSlice.reducer;