import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddCandidate() {
  const [formData, setFormData] = useState({
    name: "",
    resume: "",
    experience: "",
    bio: "",
    domain: "",
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
      const response = await fetch("http://127.0.0.1:8000/home/add_candidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to candidates page after successful submission
        window.location.href = "/candidates";
      } else {
        console.error("Failed to add candidate");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-custom text-center">
      <h1 className="section-heading">Add Candidate</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Resume</label>
          <input
            type="text"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Domain</label>
          <input
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Candidate
        </button>
      </form>

      <Link to="/candidates" className="btn btn-secondary mt-3">
        Back to Candidates
      </Link>
    </div>
  );
}
