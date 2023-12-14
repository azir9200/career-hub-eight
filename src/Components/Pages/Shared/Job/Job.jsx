import { Link } from "react-router-dom";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

  return (
    <div className="m-4 p-4" >
      <div className="card w-80 max-h-80 bg-base-100 shadow-xl">
        <figure><img className="w-32 h-auto" src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">

            <div className="badge badge-secondary"> {job_title} </div>
          </h2>
          <p>{company_name} </p>
          <div>
            <button className="px-2 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
          </div>
          <div className="mt-4 flex">
            <h2 className="flex text-xl mr-4"> <FaLocationDot className="text-xl mr-2 " ></FaLocationDot>  {location}</h2>
            <h2 className="flex"> <FaDollarSign /> {salary}</h2>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;