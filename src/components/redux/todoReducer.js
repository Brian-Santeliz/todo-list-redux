import {
  ADD_TASK,
  ADD_TASK_ERROR,
  DELETE_TASK,
  DELETE_TASK_ERROR,
  GET_TASK,
  GET_TASK_ERROR,
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
    default:
      return state;
  }
};
