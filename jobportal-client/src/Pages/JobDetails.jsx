import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      title: "Input Your Resume Link",
      input: "url",
      // inputLabel: "Resume Link",
      inputPlaceholder: "Enter your resume link",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      {/* //<PageHeader title={"Single Job Page"} path={"Single job"} /> */}
      <div className="py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center">
        <div>
          <h2 className="text-3xl text-blue font-medium mb-1 text-center">
            Single Job Page
          </h2>
          <p className="text-sm text-center">
            <a href="/"> Home </a> / Job
          </p>
        </div>
      </div>
      <h2>Job Details : {id}</h2>
      <h1> {job.jobTitle}</h1>
      <button className="bg-blue text-white px-8 py-2" onClick={handleApply}>
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
