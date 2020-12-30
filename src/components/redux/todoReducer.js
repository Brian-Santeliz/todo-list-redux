import {
  ADD_TASK,
  ADD_TASK_ERROR,
  DELETE_TASK,
  DELETE_TASK_ERROR,
  UPDATE_TASK,
  UPDATE_TASK_ERROR,
} from "./types";
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  error: false,
};
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        error: false,
        todos: [...state.todos, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        error: false,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        error: false,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, state: !todo.state } : todo
        ),
      };
    case ADD_TASK_ERROR:
    case DELETE_TASK_ERROR:
    case UPDATE_TASK_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
