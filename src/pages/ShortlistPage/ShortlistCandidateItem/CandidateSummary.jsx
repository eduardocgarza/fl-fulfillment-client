import React from "react";

export default function CandidateSummary({candidate}) {
  return (
    <div>
      <h2 className="font-bold">Summary</h2>
      <p className="text-lg my-3 p-4">{candidate.summary}</p>
    </div>
  )
}