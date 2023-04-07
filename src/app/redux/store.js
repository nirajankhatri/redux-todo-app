import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducers";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
