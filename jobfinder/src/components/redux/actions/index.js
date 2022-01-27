export const ADD_TO_SAVEDJOBS = "ADD_TO_SAVEDJOBS";
export const ADD_TO_SAVEDJOBS_ERROR = "ADD_TO_SAVEDJOBS_ERROR";
export const REMOVE_FROM_SAVEDJOBS = "REMOVE_FROM_SAVEDJOBS";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToSavedJobsAction = (job) => ({
  type: ADD_TO_SAVEDJOBS,
  payload: job,
});

export const removeFromSavedJobsAction = (id) => ({
  type: REMOVE_FROM_SAVEDJOBS,
  payload: id,
});

export const addToSavedJobsActionWithThunk = (job) => {
  return async (dispatch, getState) => {
    console.log("Here's my State", getState());
    if (getState().job.savedJobs.length < 10) {
      setTimeout(() => {
        dispatch({
          type: ADD_TO_SAVEDJOBS,
          payload: job,
        });
      }, 500);
    } else {
      dispatch({
        type: ADD_TO_SAVEDJOBS_ERROR,
      });
    }
  };
};

export const getJobsActionWithThunk = (search = "developer") => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      );
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        console.log(fetchedJobs.data);
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs.data,
        });
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
          payload: resp.status,
        });
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
