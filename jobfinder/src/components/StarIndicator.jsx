import React from "react";
import { connect } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  savedJobsLength: state.jobs.savedJobs.lenght,
});

function StarIndicator({ savedJobsLength }) {
  return (
    <>
      <div className="flex items-center space-x-5 justify-center ml-auto">
        <h4>SAVED JOBS:</h4>
        <Link to={"/favourite"}>
          <BsFillStarFill className="cursor-pointer text-4xl text-yellow-600 hover:scale-75 transition-all delay-50 ease-out" />
        </Link>
      </div>
      <span className="text-black">{savedJobsLength}</span>
    </>
  );
}

export default connect(mapStateToProps)(StarIndicator);
