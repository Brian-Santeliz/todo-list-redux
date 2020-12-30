import {
  ADD_TASK,
  DELETE_TASK,
  DELETE_TASK_ERROR,
  ADD_TASK_ERROR,
} from "./types";
export const addTask = (task) => {
  if (!task) {
    return {
      type: ADD_TASK_ERROR,
    };
  }
  const payload = {
    task,
    id: Date.now(),
  };
  return {
    type: ADD_TASK,
    payload,
  };
};

export const deleteTask = (id) => {
  if (!id) {
    return {
      type: DELETE_TASK_ERROR,
    };
  }
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
