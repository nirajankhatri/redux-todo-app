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
  const id = uuid();
  console.log("add todo", id);
  const todoActivities = JSON.parse(localStorage.getItem("todoActivities"));
  console.log(todoActivities);

  const updatedTodoActivities = [
    ...todoActivities,
    { id, activity: ["added"] },
  ];

  localStorage.setItem("todoActivities", JSON.stringify(updatedTodoActivities));
  return {
    type: ADD_TODO,
    payload: {
      id,
      title: title,
      content: content,
      complete: false,
      createdDate: new Date().toLocaleString("en-US", {
        month: "long",
        year: "numeric",
        day: "2-digit",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  };
};

export const removeTodo = (id) => {
  const todoActivities = JSON.parse(localStorage.getItem("todoActivities"));
  console.log(todoActivities);

  const updatedTodoActivities = todoActivities.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        activity: [...todo.activity, "removed"],
      };
    }
    return todo;
  });

  localStorage.setItem("todoActivities", JSON.stringify(updatedTodoActivities));
  console.log(JSON.parse(localStorage.getItem("todoActivities")));

  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const completeTodo = (id) => {
  const todoActivities = JSON.parse(localStorage.getItem("todoActivities"));
  console.log(todoActivities);

  const updatedTodoActivities = todoActivities.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        activity: [...todo.activity, "completed"],
      };
    }
    return todo;
  });

  localStorage.setItem("todoActivities", JSON.stringify(updatedTodoActivities));
  console.log(JSON.parse(localStorage.getItem("todoActivities")));

  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

export const undoCompleteTodo = (id) => {
  const todoActivities = JSON.parse(localStorage.getItem("todoActivities"));
  console.log(todoActivities);

  const updatedTodoActivities = todoActivities.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        activity: [...todo.activity, "undid complete"],
      };
    }
    return todo;
  });

  localStorage.setItem("todoActivities", JSON.stringify(updatedTodoActivities));
  console.log(JSON.parse(localStorage.getItem("todoActivities")));

  return {
    type: UNDO_COMPLETE_TODO,
    payload: id,
  };
};

export const redo = (id) => {
  const todoActivities = JSON.parse(localStorage.getItem("todoActivities"));
  console.log(todoActivities);

  const updatedTodoActivities = todoActivities.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        activity: [...todo.activity, "redid"],
      };
    }
    return todo;
  });

  localStorage.setItem("todoActivities", JSON.stringify(updatedTodoActivities));
  console.log(JSON.parse(localStorage.getItem("todoActivities")));

  return {
    type: REDO,
    payload: id,
  };
};

export const undo = (id) => {
  const todoActivities = JSON.parse(localStorage.getItem("todoActivities"));
  console.log(todoActivities);

  const updatedTodoActivities = todoActivities.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        activity: [...todo.activity, "undid"],
      };
    }
    return todo;
  });

  localStorage.setItem("todoActivities", JSON.stringify(updatedTodoActivities));
  console.log(JSON.parse(localStorage.getItem("todoActivities")));

  return {
    type: UNDO,
    payload: id,
  };
};

export const edit = (id, title, content) => {
  const todoActivities = JSON.parse(localStorage.getItem("todoActivities"));
  console.log(todoActivities);

  const updatedTodoActivities = todoActivities.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        activity: [...todo.activity, "edited"],
      };
    }
    return todo;
  });

  localStorage.setItem("todoActivities", JSON.stringify(updatedTodoActivities));
  console.log(JSON.parse(localStorage.getItem("todoActivities")));

  return {
    type: EDIT_TASK,
    payload: {
      id: id,
      title: title,
      content: content,
      updatedDate: new Date().toLocaleString("en-US", {
        month: "long",
        year: "numeric",
        day: "2-digit",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  };
};
