import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {

  }

  return (
    <div>
      <h2 className="text-2xl">job details of : { } </h2>
      <div className="grid md:grid-cols-4 gap-4  " >
        <div className="border md:col-span-3 p-10 ">
          <h2 className="text-4xl">Details coming here</h2>
          <h2>Job Details of: {job.job_title}</h2>
          <p>{job.company_name}</p>
          <p> {job.job_description} </p>
          <p>{job.salary} </p>
        </div>
        <div className="border text-center">
          <h2 className="text-2xl">Side things</h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;