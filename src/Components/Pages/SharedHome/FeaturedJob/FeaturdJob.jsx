import { useEffect, useState } from "react";
import Job from "../../Shared/Job/Job";


const FeaturdJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [])
  fetch
  return (
    <div>
      <div>
        <h2>Featured Jobs {jobs.length} </h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-6 shadow-xl ">
        {
          jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} ></Job>)
        }
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""} >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary">Show All </button>
      </div>

    </div>
  );
};

export default FeaturdJob;