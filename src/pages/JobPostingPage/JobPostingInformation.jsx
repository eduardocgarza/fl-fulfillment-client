import React from 'react'

export default function JobPostingInformation(props) {
  const { posting } = props
  const { jobSummary, keyQualifications, jobDescription, additionalRequirements } = posting
  const date = "March 9, 2023"
  
  return (
    <div className="mb-6 text-gray-900 py-8">
      <div className="p-4 border-b border-gray-300 flex pb-6 mb-2">
        <div className="w-1/4">
          <h2 className="text-2xl mb-6 font-bold">Summary</h2>
          <p>
            Posted: <span className="font-bold">{date}</span>
          </p>
        </div>
        <div className="w-3/4">
          <p className='leading-8'>{jobSummary}</p>
        </div>
      </div>

      <div className="p-4 border-b border-gray-300 flex pb-6 mb-2">
        <div className="w-1/4">
          <h2 className="text-2xl mb-6 font-bold">Key Qualifications</h2>
        </div>
        <div className="w-3/4">
          {keyQualifications.map((qualification) => (
            <li className='leading-8'>{qualification}</li>
          ))}
        </div>
      </div>

      <div className="p-4 border-b border-gray-300 flex pb-6 mb-2">
        <div className="w-1/4">
          <h2 className="text-2xl mb-6 font-bold">Description</h2>
        </div>
        <div className="w-3/4">
          <p className='leading-8'>{jobDescription}</p>
        </div>
      </div>

      <div className="p-4 border-b border-gray-300 flex pb-6 mb-2">
        <div className="w-1/4">
          <h2 className="text-2xl mb-6 font-bold">Additional Requirements</h2>
        </div>
        <div className="w-3/4">
          {additionalRequirements.map((requirement) => (
            <li className='leading-8'>{requirement}</li>
          ))}
        </div>
      </div>
    </div>
  )
}
