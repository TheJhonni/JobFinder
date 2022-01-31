import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import fetchJobsReducer from "../reducers/fetchJobsReducer";
import JobReducer from "../reducers/JobReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, bigReducers);

let configureStore = createStore(
  persistedReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;
export const persistor = persistStore(configureStore);
