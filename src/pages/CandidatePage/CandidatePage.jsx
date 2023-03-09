import React from "react";
import { useParams } from "react-router-dom";

export default function CandidatePage() {
  const { candidateId } = useParams();
  const candidateName = "John Doe";
  
  return (
    <div>
      <h1>Candidate - {candidateName}</h1>
    </div>
  )
}