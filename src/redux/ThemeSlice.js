import { createSlice } from "@reduxjs/toolkit";
import dark from "../constants/dark";
import light from "../constants/light";
export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    activeTheme: dark,
  },
  reducers: {
    toggleTheme: (state) => {
      return {
        activeTheme: state.activeTheme.type === "dark" ? light : dark,
      };
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
