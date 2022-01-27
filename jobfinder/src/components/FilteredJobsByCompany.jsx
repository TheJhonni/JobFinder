import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const fetchCompany = async (companyName) => {
  try {
    let resp = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${companyName}`
    );
    if (resp.ok) {
      let company = await resp.json();
      return company;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

function FilteredJobsByCompany() {
  let { company } = useParams();

  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    fetchCompany(company).then((res) => setCompanyJobs(res));
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {companyJobs.data &&
        companyJobs?.data.map((job) => (
          <div className="rounded overflow-hidden shadow-sm hover:shadow-xl  hover:border-stone-600 cursor-pointer">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
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
        ))}
    </div>
  );
}

export default FilteredJobsByCompany;
