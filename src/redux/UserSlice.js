import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    signUp: (state, action) => {
      state.userInfo = action.payload;
    },
    signIn: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },
    updatePhoto: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { signUp, signIn, updateUser, updatePhoto } = UserSlice.actions;

export default UserSlice.reducer;
