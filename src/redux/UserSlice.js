import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signIn } = UserSlice.actions;

export default UserSlice.reducer;
