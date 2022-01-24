import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";

function ListJobs() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10"
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

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <div className="mb-5 bg-gray-200">
        <input
          className="rounded-full my-4 p-5"
          type="text"
          placeholder="Search your job"
        />
        {jobs.map((job) => (
          <Jobs key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default ListJobs;
