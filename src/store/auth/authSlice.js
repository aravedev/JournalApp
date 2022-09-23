import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // "checking" , "not-authenticated" , "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
    flag: false,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},

    //
    checkingCredentials: (state) => {
      // when the user tries to do the authentication, we have to send the app to a temporary state to check the info.

      state.status = "checking";
      state.flag = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, initialState } =
  authSlice.actions;
