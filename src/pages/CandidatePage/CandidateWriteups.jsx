import React from 'react'

// Executive Summary
// Education and Experience
// Meets or Exceeds Objectives
// Team / Role Fit
// Location and Travel
// Desired Compensation
// Experience and Accomplishments

export default function CandidateWriteups() {
  const sections = [
    'Executive Summary',
    'Education and Experience',
    'Meets or Exceeds Objectives ',
    'Team and Role Fit',
    'Location and Travel',
    'Desired Compensation',
    'Experience and Accomplishments',
  ]

  return (
    <div className="py-8 px-6">
      <h2 className="text-center font-bold text-4xl mb-6">Learn more about Mike</h2>
      <div className="flex flex-wrap justify-around">
        {sections.map((section, index) => (
          <div key={section} className="my-4 w-[calc(50%-20px)] p-6 bg-white shadow-xl rounded-xl">
            <h2 className="text-center font-bold mb-4 text-3xl">{section}</h2>
            <p className="text-xl leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime excepturi quia ipsum dolor ullam aperiam eius nemo? Reiciendis rerum ducimus minus, inventore necessitatibus maiores ut ullam voluptatem. Consequatur, facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime excepturi quia ipsum dolor ullam aperiam eius nemo? Reiciendis rerum ducimus minus, inventore necessitatibus maiores ut ullam voluptatem. Consequatur, facere.
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}
