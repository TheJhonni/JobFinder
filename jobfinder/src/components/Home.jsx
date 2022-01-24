import React, { useEffect, useState } from "react";

function Home({ fetchJobs }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then((res) => setJobs(res));
  });
  return (
    <div>
      <div>
        <input type="text" placeholder="Search your job"></input>
      </div>
      <div>
        <ul>
          <li>cwcqc</li>
        </ul>
        <ul>
          <li>ccwqcwc</li>
        </ul>
        <ul>
          <li>wcqwcwc</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
