import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: JSON.parse(localStorage.getItem('items')) || []
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
       updateItem: (state,updatedItem, {payload}) => {
         const index = state.items.findIndex(item => item.id === payload.id);
         state.items[index]= updatedItem;
       }
    }
});
export const { addItem, removeItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;