import React from "react";

export default function ShortlistOnboarding() {
  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center mb-1">Explaining the Shortlist</h2>
        <p className="text-center text-md text-gray-800">
          Here's an explanation of the Candidates Shortlist in 100 seconds
        </p>
      </div>
      <iframe
        src="https://www.loom.com/embed/221f217704be4b668928c1a4cacb2f0e"
        className="w-full h-[400px] rounded-2xl"
        allowFullScreen
        title="Loom Onboarding Video"
      ></iframe>
    </div>
  )
}