import React from "react";
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromSavedJobsAction } from "./redux/actions";

const mapStateToProps = (state) => ({
  savedJobs: state.jobs.savedJobs,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromSaved: (index) => {
    dispatch(removeFromSavedJobsAction(index));
  },
});

function SavedJobsPage({ savedJobs, removeFromSaved }) {
  return (
    <>
      <h1 className="text-centern py-5 shadow-xl text-2xl my-4">
        THE NUMBER OF YOUR SAVED JOBS IS : {savedJobs.length}
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {savedJobs &&
          savedJobs.map((savedJob, i) => (
            <div
              key={i}
              className="rounded overflow-hidden shadow-sm hover:shadow-xl  hover:border-stone-600"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {savedJob.title}
                  <a href={savedJob.url} target="_blank">
                    <span className="inline-block bg-gray-200 rounded-full px-3 ml-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-stone-600 hover:text-white">
                      {savedJob.company_name}
                    </span>
                  </a>
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex space-x-3 justify-center align-center px-6 pt-4 pb-3">
                <button onClick={() => removeFromSaved(i)}>
                  <FaTrash className="cursor-pointer text-red-700" />
                </button>
                <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {savedJob.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #getJobs
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedJobsPage);
