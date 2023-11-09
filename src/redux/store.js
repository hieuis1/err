import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./slice/addSlice";
export const store = configureStore({
  reducer: {
    add: addReducer,
  },
});
