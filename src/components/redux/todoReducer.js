import {
  ADD_TASK,
  ADD_TASK_ERROR,
  DELETE_TASK,
  DELETE_TASK_ERROR,
} from "./types";
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};
