import React from "react";
import { Card } from "react-bootstrap";

export default function CandidateCard({ candidate }) {
  return (
    <Card className="candidate-card">
      <Card.Body>
        <Card.Title>{candidate.name}</Card.Title>
        <Card.Text className="experience">{candidate.experience}</Card.Text>
        <Card.Text className="domain">{candidate.domain}</Card.Text>
        <Card.Text className="bio">{candidate.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}
