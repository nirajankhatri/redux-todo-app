import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  UNDO_COMPLETE_TODO,
  UNDO,
  REDO,
  EDIT_TASK,
} from "./todoConstants";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.payload.id,
          past: [],
          present: {
            title: action.payload.title,
            content: action.payload.content,
            complete: action.payload.complete,
          },
          future: [],
          createdDate: action.payload.createdDate,
        },
      ];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case COMPLETE_TODO:
      console.log("com", action.payload);
      return state.map((todo) => {
        if (todo.id == action.payload) {
          console.log(action.payload);
          return {
            id: todo.id,
            past: [...todo.past, todo.present],
            present: {
              ...todo.present,
              complete: true,
            },
            future: [],
          };
        } else {
          return todo;
        }
      });

    case UNDO_COMPLETE_TODO:
      console.log(action.payload);
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            id: todo.id,
            past: [...todo.past, todo.present],
            present: {
              ...todo.present,
              complete: false,
            },
            future: [],
          };
        } else {
          return todo;
        }
      });

    case UNDO:
      console.log("undo1");
      return state.map((todo) => {
        if (todo.id === action.payload) {
          console.log("undo");
          const previous = todo.past[todo.past.length - 1];
          const newPast = todo.past.slice(0, todo.past.length - 1);
          return {
            id: todo.id,
            past: newPast,
            present: previous,
            future: [todo.present, ...todo.future],
          };
        } else {
          return todo;
        }
      });

    case REDO:
      console.log("redo1");
      return state.map((todo) => {
        if (todo.id === action.payload) {
          console.log("redo");
          const next = todo.future[0];
          const newFuture = todo.future.slice(1);
          return {
            id: todo.id,
            past: [...todo.past, todo.present],
            present: next,
            future: newFuture,
          };
        } else {
          return todo;
        }
      });

    case EDIT_TASK:
      console.log("edit1");
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log("edit");
          return {
            ...todo,
            past: [...todo.past, todo.present],
            present: {
              ...todo.present,
              title: action.payload.title,
              content: action.payload.content,
            },
            future: [],
            updatedDate: action.payload.updatedDate,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todoReducer;
