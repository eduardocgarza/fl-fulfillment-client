import React from 'react'

export default function CandidateSkills({ candidate }) {
  const { interpersonalCharacteristics, technicalSkills } = candidate

  return (
    <div className="mb-10">
      <div className="py-4 px-2">
        <h2 className="font-bold text-xl mb-2">Interpersonal Skills</h2>

        <div className="flex">
          {interpersonalCharacteristics.map((skill) => (
            <div
              className="py-2 mr-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 px-2">
        <h2 className="font-bold text-xl mb-2">Technical Skills</h2>
        <div className="flex">
          {technicalSkills.map((skill) => (
            <div
              className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
