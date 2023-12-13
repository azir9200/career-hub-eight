import { useEffect, useState } from "react";
import Job from "../../Shared/Job/Job";


const FeaturdJob = () => {
  const [jobs, setJobs] = useState([]);
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        {
          jobs.map(job => <Job key={job.id} job={job} ></Job>)
        }
      </div>

    </div>
  );
};

export default FeaturdJob;