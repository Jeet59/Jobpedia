import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import CandidateCard from "./candidatecard"; // Make sure to create this component

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/home/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data));
  }, []);

  return (
    <Container>
      <h1 className="section-heading text-center mb-4">
        Explore Our Candidates
      </h1>
      <Link to="/add_candidate" className="btn btn-primary">
        Add Candidate
      </Link>
      <div className="candidate-listings">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </Container>
  );
}
