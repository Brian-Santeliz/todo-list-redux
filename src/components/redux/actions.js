import { ADD_TASK } from "./types";
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
