import { createStore } from "redux";
import mainReducer from "../reducers";

export const initialState = {
  jobs: {
    savedJobs: [],
  },
};

let configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUZ_DEVTOOLS_EXTENSION
);

export default configureStore;
