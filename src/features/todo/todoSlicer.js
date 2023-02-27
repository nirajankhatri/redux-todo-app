import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: uuid(),
        task: action.payload,
        complete: false,
      });
    },
    removeTodo: (state, action) => {
      let todoList = state.todoList;
      state.todoList = todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    completeTodo: (state, action) => {
      let todoList = state.todoList;
      state.todoList = todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.complete = true;
        }
        return todo;
      });
    },
    undoCompleteTodo: (state, action) => {
      let todoList = state.todoList;
      state.todoList = todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.complete = false;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo, undoCompleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
