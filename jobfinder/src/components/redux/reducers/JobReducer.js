import {
  ADD_TO_SAVEDJOBS,
  ADD_TO_SAVEDJOBS_ERROR,
  REMOVE_FROM_SAVEDJOBS,
} from "../actions";
import { initialState } from "../store";

const JobReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case ADD_TO_SAVEDJOBS:
      return {
        ...state,
        savedJobs: [...state.savedJobs, action.payload],
      };

    case ADD_TO_SAVEDJOBS_ERROR:
      return {
        ...state,
        savedJobsError: true,
      };

    case REMOVE_FROM_SAVEDJOBS:
      return {
        ...state,
        savedJobs: state.savedJobs.filter((job) => job._id !== action.payload),
        savedJobsError: false,
      };

    default:
      return state;
  }
};

export default JobReducer;
