import { ADD_TASK } from "../types";

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};
