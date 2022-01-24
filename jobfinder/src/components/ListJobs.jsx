import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";

function ListJobs() {
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
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="flex justify-center mb-5 bg-gray-300">
        <input
          className="rounded-full my-4 p-5"
          type="text"
          placeholder="Search your job"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {jobs && jobs.map((job) => <Jobs key={job._id} job={job} />)}
    </div>
  );
}

export default ListJobs;
