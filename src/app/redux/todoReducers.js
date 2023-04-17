import uuid from "react-uuid";
import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  UNDO_COMPLETE_TODO,
  UNDO,
  REDO,
  EDIT_TASK,
} from "./todoConstants";

const initialState = {
  todoList: [],
  activityHistory: [],
};

const todoReducer = (state = initialState, action) => {

  let activityId = "";
  
  switch (action.type) {

    case ADD_TODO: {
      let todoId = uuid();
      activityId = uuid();
      return {
        todoList: [
          ...state.todoList,
          {
            id: todoId,
            past: [],

            present: {
              title: action.payload.title,
              content: action.payload.content,
              complete: false,
            },
            future: [],
            createdDate: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
            updatedDate: "",
          },
        ],
        activityHistory: [
          ...state.activityHistory,
          {
            activityId,
            todoId,
            activity: "Added",
            title: action.payload.title,
            dateTime: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
    }

    case REMOVE_TODO: {
      activityId = uuid();
      return {
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
        activityHistory: [
          ...state.activityHistory,

          {
            activityId,
            todoId: action.payload.id,
            activity: "Added",
            title: action.payload.title,
            dateTime: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
    }

    case COMPLETE_TODO: {
      activityId = uuid();

      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              id: todo.id,
              past: [...todo.past, todo.present],
              present: {
                ...todo.present,
                complete: true,
              },
              future: [],
              createdDate: todo.createdDate,
              updatedDate: todo.updatedDate,
            };
          } else {
            return todo;
          }
        }),
        activityHistory: [
          ...state.activityHistory,

          {
            activityId,
            todoId: action.payload.id,
            activity: "Completed",
            title: action.payload.title,
            dateTime: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
    }

    case UNDO_COMPLETE_TODO: {
      activityId = uuid();

      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              id: todo.id,
              past: [...todo.past, todo.present],
              present: {
                ...todo.present,
                complete: false,
              },
              future: [],
              createdDate: todo.createdDate,
              updatedDate: todo.updatedDate,
            };
          } else {
            return todo;
          }
        }),
        activityHistory: [
          ...state.activityHistory,

          {
            activityId,
            todoId: action.payload.id,
            activity: "Undo Completed",
            title: action.payload.title,
            dateTime: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
    }

    case UNDO: {
      activityId = uuid();

      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            const previous = todo.past[todo.past.length - 1];
            const newPast = todo.past.slice(0, todo.past.length - 1);
            return {
              id: todo.id,
              past: newPast,
              present: previous,
              future: [todo.present, ...todo.future],
              createdDate: todo.createdDate,
              updatedDate: todo.updatedDate,
            };
          } else {
            return todo;
          }
        }),
        activityHistory: [
          ...state.activityHistory,

          {
            activityId,
            todoId: action.payload.id,
            activity: "Undid",
            title: action.payload.title,
            dateTime: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
    }

    case REDO: {
      activityId = uuid();

      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            const next = todo.future[0];
            const newFuture = todo.future.slice(1);
            return {
              id: todo.id,
              past: [...todo.past, todo.present],
              present: next,
              future: newFuture,
              createdDate: todo.createdDate,
              updatedDate: todo.updatedDate,
            };
          } else {
            return todo;
          }
        }),
        activityHistory: [
          ...state.activityHistory,

          {
            activityId,
            todoId: action.payload.id,
            activity: "Redid",
            title: action.payload.title,
            dateTime: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
    }

    // const todo = state.todoList.find((each) => each.id === action.payload.id);
    // return {
    //   ...state,
    //   activityHistory: [
    //     ...state.activityHistory,
    //     {
    //       ...todo,
    //       content: action.payload.content,
    //       updatedDate: action.payload.updatedDate,
    //     },
    //   ],
    // };
    case EDIT_TASK: {
      activityId = uuid();

      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              past: [...todo.past, todo.present],
              present: {
                ...todo.present,
                title: action.payload.title,
                content: action.payload.content,
              },
              future: [],
              createdDate: todo.createdDate,
              updatedDate: new Date().toLocaleString("en-US", {
                month: "long",
                year: "numeric",
                day: "2-digit",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
          } else {
            return todo;
          }
        }),
        activityHistory: [
          ...state.activityHistory,

          {
            activityId,
            todoId: action.payload.id,
            activity: "Edited",
            title: action.payload.title,
            dateTime: new Date().toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "2-digit",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
