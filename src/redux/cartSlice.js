import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      console.log(action);
      state.items = action.payload;
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setCartItems, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
