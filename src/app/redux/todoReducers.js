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
/* 
const initialState = {
  todoList: [
    {
      id: action.payload.id,
      past:[],
      future:[],
      present: { ...action.payload}
    }
  ],
  activityHistory: [
    ...state.activityHistory, {
       id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        complete: action.payload.complete,
        createdDate: action.payload.createdDate,
    }
  ]
};

*/

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
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
          updatedDate: "",
        },
      ];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          console.log(action.payload);
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
      });

    case UNDO_COMPLETE_TODO:
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
            createdDate: todo.createdDate,
            updatedDate: todo.updatedDate,
          };
        } else {
          return todo;
        }
      });

    case UNDO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
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
      });

    case REDO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
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
      });

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
    case EDIT_TASK:
      return state.map((todo) => {
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
