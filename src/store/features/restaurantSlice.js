import { createSlice } from "@reduxjs/toolkit";
// Clear corrupted localStorage data



const restaurantsFromStorage = localStorage.getItem('restaurants');
const storedItems = (() => {
    try {
        return restaurantsFromStorage && restaurantsFromStorage !== 'null' && restaurantsFromStorage !== '"null"' ? JSON.parse(restaurantsFromStorage) : [];
    } catch (error) {
        console.warn('Failed to parse restaurants from localStorage:', error);
        // Clear corrupted data
        //localStorage.removeItem('restaurants');
        return [];
    }
})();


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
                openingHours: payload.openingHours || null, // Horaires d'ouverture
                paymentSettings: {
                    acceptCash: true,
                    acceptCard: true,
                    acceptMobilePayment: false,
                    minimumOrderAmount: 0,
                    deliveryFee: 0,
                    taxRate: 0
                },
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
        },
        updateRestaurant: (state, {payload}) => {
           const index = state.restaurants.findIndex(restaurant => restaurant.name === payload.name); 
           state.restaurants[index] = {
              ...payload
           }

           localStorage.setItem('restaurants', JSON.stringify(state.restaurants));
        }
    },
})

export const { createRestaurant, resetRestaurants, updateRestaurant } = restaurantSlice.actions;

// Selector pour obtenir les restaurants d'un propriétaire
export const getRestaurantsByOwner = (state, ownerId) => 
    state.restaurant.restaurants.find(restaurant => restaurant.ownerId === ownerId) || null;

export default restaurantSlice.reducer;