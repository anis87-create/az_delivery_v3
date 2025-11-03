import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'categories',
    initialState: {
        categories:  localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : []
    },
    reducers: {
        addCategory: (state, {payload}) => {
            state.categories.push(payload);
            localStorage.setItem('categories', JSON.stringify(state.categories));
        },
        findCategoryById: (state, payload) => {
          return state.categories.find(category => category.id ===  payload); 
        },
        resetCategory : (state) => {
            state.categories = [];
            localStorage.setItem('categories', JSON.stringify(state.categories));
    }
}
});
export const { addCategory, resetCategory, findCategoryById } = itemsSlice.actions;
export default itemsSlice.reducer;