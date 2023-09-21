import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/AuthSlice";

export const store = configureStore({
  reducer: {
    AuthReducer,
  },
});
