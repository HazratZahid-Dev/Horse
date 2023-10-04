import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/AuthSlice";
import OwnerGroupSlice from "./Slices/OwnerGroupSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    ownerGroup:OwnerGroupSlice
  },
});
