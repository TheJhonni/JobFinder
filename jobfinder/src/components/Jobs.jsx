import React, { useState } from "react";
import { Link } from "react-router-dom";

function Jobs({ job }) {
  const [company, setCompany] = useState([]);
  return (
    <div className="flex flex-col justify-center items-center p-2 my-2 border-2">
      <div className="flex">
        <img src={job?.url} alt="" />
      </div>
      <div className="flex flex-col justify-start space-x-3">
        <p className="border-1"> Job Title: {job.title}</p>
        <Link to={"/company" + job.company_name}>
          <p className="border-1"> Company: {job.company_name}</p>
        </Link>
        <p className="border-1"> Category: {job.category}</p>
      </div>
    </div>
  );
}

export default Jobs;
