// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the cart reducer

const store = configureStore({
    reducer: {
        cart: cartReducer, // Add cart reducer to the store
    },
});

export default store;
