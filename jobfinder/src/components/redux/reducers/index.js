import { ADD_TO_SAVEDJOBS, REMOVE_FROM_SAVEDJOBS } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SAVEDJOBS:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          savedJobs: [...state.jobs.savedJobs, action.payload],
        },
      };
    case REMOVE_FROM_SAVEDJOBS:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          savedJobs: state.jobs.savedJobs.filter(
            (job, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
