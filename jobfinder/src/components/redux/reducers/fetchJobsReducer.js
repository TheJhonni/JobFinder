import { GET_JOBS, GET_JOBS_ERROR } from "../actions";
import { initialState } from "../store";

const fetchJobsReducer = (state = initialState.fetchJobs, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        displayedJobs: action.payload,
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default fetchJobsReducer;
