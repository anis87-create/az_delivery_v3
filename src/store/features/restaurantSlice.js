import { createSlice } from "@reduxjs/toolkit";
// Clear corrupted localStorage data



const restaurantsFromStorage = localStorage.getItem('restaurants');
const storedItems = restaurantsFromStorage && restaurantsFromStorage !== 'null' && restaurantsFromStorage !== '"null"' ? JSON.parse(restaurantsFromStorage) : [];


const  restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        restaurants :  storedItems
    },
    reducers: {
        createRestaurant: (state, {payload}) => {
            // Ajouter l'ID du propriétaire au restaurant
            const restaurantWithOwner = {
                ...payload,
                id: Date.now(), // ID unique pour le restaurant
                ownerId: payload.ownerId || null, // ID du propriétaire
                createdAt: new Date().toISOString()
            };
            state.restaurants.push(restaurantWithOwner);
            localStorage.setItem('restaurants', JSON.stringify(state.restaurants));
        },
        resetRestaurants: (state) => {
            state.restaurants = [];
            localStorage.setItem('restaurants', JSON.stringify([]));
        },
        findRestaurantByUserId: (state, {payload}) => {
            return state.restaurants.find(restaurant => restaurant.userId === payload.id);
        }
    },
})

export const { createRestaurant, resetRestaurants } = restaurantSlice.actions;

// Selector pour obtenir les restaurants d'un propriétaire
export const getRestaurantsByOwner = (state, ownerId) => 
    state.restaurant.restaurants.find(restaurant => restaurant.ownerId === ownerId);

export default restaurantSlice.reducer;