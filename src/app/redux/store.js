import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducers";
// import todoReducer from '../../features/todo/todoSlicer'

export const store = configureStore({
  reducer: {
    // todo: todoReducer,
    todo: todoReducer,
  },
});
