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
import formatISO from "date-fns/formatISO";

export const addTodo = (title, content) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      title: title,
      content: content,
      complete: false,
      createdDate: formatISO(new Date(), { representation: 'date' }),

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
  console.log("com");
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
  console.log(id);
  return {
    type: REDO,
    payload: id,
  };
};

export const undo = (id) => {
  console.log(id);
  return {
    type: UNDO,
    payload: id,
  };
};

export const edit = (id, title, content) => {
  console.log(id);
  return {
    type: EDIT_TASK,
    payload: {
      id: id,
      title: title,
      content: content,
      updatedDate: formatISO(new Date(), { representation: 'date' }),
    },
  };
};
