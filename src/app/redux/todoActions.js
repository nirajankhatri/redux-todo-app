import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  UNDO_COMPLETE_TODO,
  REDO,
  UNDO,
  EDIT_TASK,
} from "./todoConstants";
import uuid from "react-uuid";

export const addTodo = (title, content) => {
  return {
    type: ADD_TODO,
    payload: {
      title: title,
      content: content,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

export const undoCompleteTodo = (id) => {
  return {
    type: UNDO_COMPLETE_TODO,
    payload: id,
  };
};

export const redo = (id) => {
  return {
    type: REDO,
    payload: id,
  };
};

export const undo = (id) => {
  return {
    type: UNDO,
    payload: id,
  };
};

export const edit = (id, title, content) => {
  return {
    type: EDIT_TASK,
    payload: {
      id: id,
      title: title,
      content: content,
    },
  };
};
