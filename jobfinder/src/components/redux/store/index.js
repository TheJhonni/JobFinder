import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import fetchJobsReducer from "../reducers/fetchJobsReducer";
import JobReducer from "../reducers/JobReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

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
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, bigReducers);

export let configureStore = createStore(
  persistedReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

//export default configureStore;
export const persistor = persistStore(configureStore);
