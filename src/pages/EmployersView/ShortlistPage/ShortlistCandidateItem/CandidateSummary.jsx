import React from "react";

export default function CandidateSummary({candidate}) {
  return (
    <div>
      <h2 className="font-bold text-xl mb-2">Summary</h2>
      <p className="leading-8 px-1">{candidate.summary}</p>
    </div>
  )
}