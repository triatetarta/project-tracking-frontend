import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
