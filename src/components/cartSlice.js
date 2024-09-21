// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            state.items.push(item);
            state.count += 1; // Increment count if needed
        },
        // other reducers...
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
