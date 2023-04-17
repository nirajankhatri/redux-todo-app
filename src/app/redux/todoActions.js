import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  UNDO_COMPLETE_TODO,
  REDO,
  UNDO,
  EDIT_TASK,
} from "./todoConstants";

export const addTodo = (title, content) => {
  return {
    type: ADD_TODO,
    payload: {
      title: title,
      content: content,
    },
  };
};

export const removeTodo = (id, title) => {
  console.log(id, title, "Inside remove");
  return {
    type: REMOVE_TODO,
    payload: { id: id, title: title },
  };
};

export const completeTodo = (id, title) => {
  return {
    type: COMPLETE_TODO,
    payload: { id: id, title: title },
  };
};

export const undoCompleteTodo = (id, title) => {
  return {
    type: UNDO_COMPLETE_TODO,
    payload: { id: id, title: title },
  };
};

export const redo = (id, title) => {
  return {
    type: REDO,
    payload: { id: id, title: title },
  };
};

export const undo = (id, title) => {
  return {
    type: UNDO,
    payload: { id: id, title: title },
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
