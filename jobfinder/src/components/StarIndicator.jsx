import React from "react";
import { connect } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  savedJobsLength: state.jobs.savedJobs.length,
});

function StarIndicator({ savedJobsLength }) {
  return (
    <>
      <h4 className="mr-3">SAVED JOBS:</h4>
      <div className="flex items-baseline justify-center ml-auto">
        <Link to={"/favourite"}>
          <BsFillStarFill className="cursor-pointer text-4xl mr-3 text-yellow-600 hover:scale-75 hover:text-yellow-400 transition-all delay-50 ease-out" />
        </Link>
      </div>
      <span className="text-black">{savedJobsLength}</span>
    </>
  );
}

export default connect(mapStateToProps)(StarIndicator);
