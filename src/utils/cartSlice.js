import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items: [], 
   },
   reducers: {
      // Redux Toolikit uses immer BTS
      addItem: (state, action) => {
         state.items.push(action.payload);
      },
      removeItem: (state) => {
         state.items.pop();
      },
      clearItem: (state) => {
         state.items.length = 0;
      },
   },
});


export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;