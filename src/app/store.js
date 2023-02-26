import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlicer'


export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
