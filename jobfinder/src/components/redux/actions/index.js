export const ADD_TO_SAVEDJOBS = "ADD_TO_SAVEDJOBS";
export const REMOVE_FROM_SAVEDJOBS = "REMOVE_FROM_SAVEDJOBS";

export const addToSavedJobsAction = (job) => ({
  type: ADD_TO_SAVEDJOBS,
  payload: job,
});

export const removeFromSavedJobsAction = (index) => ({
  type: REMOVE_FROM_SAVEDJOBS,
  payload: index,
});
