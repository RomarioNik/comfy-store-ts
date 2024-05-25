import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "cart slice",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const cartReducer = cartSlice.reducer;
