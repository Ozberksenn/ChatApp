import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signUp } = UserSlice.actions;

export default UserSlice.reducer;
