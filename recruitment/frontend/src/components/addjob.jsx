import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/home/add_job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to jobs page after successful submission
        window.location.href = "/jobs";
      } else {
        console.error("Failed to add job");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-custom text-center">
      <h1 className="section-heading">Add Job</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Job
        </button>
      </form>

      <Link to="/jobs" className="btn btn-secondary mt-3">
        Back to Jobs
      </Link>
    </div>
  );
}
