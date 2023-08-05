import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/home/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h1 className="section-heading">Job Listings</h1>
      <Link to="/add_job" className="btn btn-primary">
        Add Job
      </Link>
      <div className="job-listings">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.description}</p>
            <p>{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
