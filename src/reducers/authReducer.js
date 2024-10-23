// reducers/authReducer.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
    token: null, 
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null; 
    },
    register: (state, action) => {
      state.isAuthenticated = true; // Automatically authenticate after registration
      state.token = action.payload; // Store the token after registration
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
