import { createSlice } from "@reduxjs/toolkit";

// Get initial values from localStorage if available
const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  id: localStorage.getItem("userID") || null,
  isAdmin: localStorage.getItem("isAdmin") || false,
  token: localStorage.getItem("token") || null,
  //   userImage: localStorage.getItem("userImage") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // Action payload should contain user data, e.g., { id, token, userImage }
      const { id, token, isAdmin, userImage } = action.payload;
      state.isLoggedIn = true;
      state.id = id;
      state.isAdmin = isAdmin;
      state.token = token;
      //   state.userImage = userImage;

      // Persist user data to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userID", id);
      localStorage.setItem("isAdmin", isAdmin);
      localStorage.setItem("userImage", userImage);
    },
    logout: (state) => {
      // Reset store and localStorage on logout
      state.isLoggedIn = false;
      state.id = null;
      state.isAdmin = false;
      state.userImage = null;

      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("userImage");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
