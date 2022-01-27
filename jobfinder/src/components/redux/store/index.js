import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import fetchJobsReducer from "../reducers/fetchJobsReducer";
import JobReducer from "../reducers/JobReducer";
import thunk from "redux-thunk";

const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  jobs: {
    savedJobs: [],
    savedJobsError: false,
  },
  fetchJobs: {
    displayedJobs: [],
    errorMessage: null,
  },
};

const bigReducers = combineReducers({
  jobs: JobReducer,
  fetchJobs: fetchJobsReducer,
});

let configureStore = createStore(
  bigReducers,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;
