import React from "react";
import { Link } from "react-router-dom";

function Jobs({ job }) {
  return (
    <div className="rounded overflow-hidden shadow-md hover:shadow-xl  hover:scale-105 transform transition-all ease-out">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <a href={job.url} target="_blank">
            {job.title}
          </a>
          <Link to={"/" + job.company_name}>
            <span className="inline-block bg-gray-200 rounded-full px-3 ml-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-stone-600 hover:text-white">
              {job.company_name}
            </span>
          </Link>
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, Nonea! Maiores et perferendis eaque, exercitatinpm startonem
          praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {job.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #getJobs
        </span>
      </div>
    </div>
  );
}

export default Jobs;
