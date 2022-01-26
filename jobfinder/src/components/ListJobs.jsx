import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";
import StarIndicator from "./StarIndicator";

function ListJobs() {
  const fetchJobs = async (search = "developer") => {
    try {
      let resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      );
      if (resp.ok) {
        let jobs = await resp.json();
        console.log(jobs);
        setJobs(jobs.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value); //develop
    fetchJobs(e.target.value); // develo
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
            {" "}
            <StarIndicator />
          </div>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {jobs &&
          jobs
            .filter((job) => true || job.title.toLowerCase().includes(search))
            .map((job, i) => <Jobs i={i} key={job._id} job={job} />)}
      </div>
    </>
  );
}

export default ListJobs;
