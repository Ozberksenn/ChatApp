import { configureStore } from "@reduxjs/toolkit";
import theme from "./ThemeSlice";

export default configureStore({
  reducer: {
    theme,
  },
});
