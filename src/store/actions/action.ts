import { ADD_TASK } from "../types";

export const addTask = (task: any) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
