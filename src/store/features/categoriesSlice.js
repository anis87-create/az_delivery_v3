import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: JSON.parse(localStorage.getItem('categories')) || []
    },
    reducers: {
        addCategory: (state, {payload}) => {
            state.categories.push(payload);
            localStorage.setItem('categories', JSON.stringify(state.categories));
        },
        resetCategory : (state) => {
            state.categories = [];
            localStorage.setItem('categories', state.categories);
        }
    }
});
export const { addCategory, resetCategory } = itemsSlice.actions;
export default itemsSlice.reducer;