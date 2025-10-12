import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites:  localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
    },
    reducers: {
        addToFavorites:(state, {payload})  =>{
           state.favorites.push(payload);
           localStorage.setItem('favorites', JSON.stringify(state.favorites));   
        },
        deletFromFavories: (state , {payload}) => {
            const index = state.favorites.findIndex(favorite => favorite.id === payload);
            state.favorites.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        resetFavorites: (state) => {
            return {
                favorites: []
            }
        }
    }
});

export const {addToFavorites, deletFromFavories, resetFavorites} = favoritesSlice.actions;

export default favoritesSlice.reducer;