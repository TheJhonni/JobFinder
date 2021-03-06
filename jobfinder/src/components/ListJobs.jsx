import React, { useEffect, useState } from "react";
//import { connect } from "react-redux";
import Jobs from "./Jobs";
import { getJobsActionWithThunk } from "./redux/actions";
import StarIndicator from "./StarIndicator";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

/* const mapStateToProps = (state) => ({
  jobsAvailable: state.fetchJobs.displayedJobs,
  errorMessage: state.fetchJobs.errorMessage,
}); */

/* const mapDispatchToProps = (dispatch) => ({
  getJobs: (search = "developer") => {
    dispatch(getJobsActionWithThunk(search));
  },
}); */

function ListJobs() {
  const jobsAvailable = useSelector((state) => state.fetchJobs.displayedJobs);
  const errorMessage = useSelector((state) => state.fetchJobs.errorMessage);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getJobsActionWithThunk(search));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(getJobsActionWithThunk(e.target.value));
  };

  return (
    <>
      <div className="bg-gray-200">
        <div className="flex items-center mb-5 bg-gray-300">
          <input
            className="flex ml-10 rounded-full my-4 p-5"
            type="text"
            placeholder="Search your Job Title"
            value={search}
            onChange={handleSearch}
          />

          <div className="flex items-center space-x-1 mr-10 ml-auto">
            <StarIndicator />
          </div>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {jobsAvailable ? (
          jobsAvailable
            .filter((job) => true || job.title.toLowerCase().includes(search))
            .map((job, i) => (
              <Jobs
                i={i}
                errorMessage={errorMessage}
                key={job._id}
                jobsAvailable={job}
              />
            ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

//export default connect(mapStateToProps, mapDispatchToProps)(ListJobs);
export default ListJobs;
