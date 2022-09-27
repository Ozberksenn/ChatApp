import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    signUp: (state, action) => {
      state.userInfo = action.payload;
      console.log("signUp : ", action.payload);
    },
    signIn: (state, action) => {
      state.userInfo = action.payload;
      console.log("signIn : ", action.payload);
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload;
      console.log("updateUser : ", action.payload);
    },
  },
});

export const { signUp, signIn, updateUser } = UserSlice.actions;

export default UserSlice.reducer;
