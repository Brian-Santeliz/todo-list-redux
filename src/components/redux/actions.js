import { ADD_TASK, DELETE_TASK } from "./types";
export const addTask = (task) => {
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
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
