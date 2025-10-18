import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // stores all products added to the cart
    count: 0,  // total number of items in the cart
  },
  reducers: {
    // 1. Add to cart
    addToCart(state, action) {
      const newItem = action.payload; // product details passed from dispatch
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // If product already in cart → just increase its quantity
        existingItem.quantity += 1;
      } else {
        // If product is new → add with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.count += 1; // Increase total cart count
    },

    // 2. Remove a single product from the cart
    removeFromCart(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        if (item.quantity > 1) {
          // Reduce quantity by 1
          item.quantity -= 1;
        } else {
          // If only 1 left → remove product entirely
          state.items.splice(itemIndex, 1);
        }

        state.count -= 1; // Update total count
      }
    },

    // 3. Clear the whole cart
    clearCart(state) {
      state.items = [];
      state.count = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
