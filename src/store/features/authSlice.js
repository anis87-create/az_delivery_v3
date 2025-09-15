import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
        currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null,
        isAuth: false,
    },
    reducers: {
        login:(state, action) => {
           let foundUser = state.users.find(user => user.email === action.payload.email);
           if(foundUser){
            localStorage.setItem('currentUser', JSON.stringify(foundUser));
            state.currentUser = foundUser;
            state.isAuth = true;
           }else {
            state.isAuth = false;
            console.log('invalide credentials');
           }

        },
        register: (state, action) => {
           const newUser =  {
               id: uuidv4(),
               created_at: new Date().toISOString(),
               ...action.payload
           };
           state.users = [...state.users, newUser];
           state.isAuth = false;
           localStorage.setItem('users', JSON.stringify(state.users));
        },
        logout:(state) => {
            state.isAuth = false;
            localStorage.removeItem('currentUser');
        },
        reset: () => {
            return {
                users: [],
                currentUser: {},
                isAuth: false
            }
        }
    }
});

export const {login, register, logout, reset} = authSlice.actions;

export default authSlice.reducer;
