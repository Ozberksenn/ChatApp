import { configureStore } from "@reduxjs/toolkit";
import theme from "./ThemeSlice";
import user from "./UserSlice";
export default configureStore({
  reducer: {
    theme,
    user,
  },
});
