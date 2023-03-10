import React from 'react'
import { exampleJobPosting } from 'pages/JobPostingPage/JobPostingPage'
import { Typography } from '@material-tailwind/react'

export default function ShortlistHeader() {
  const posting = exampleJobPosting
  const { jobTitle, jobLocation, companyTeam } = posting

  return (
    <div className="mb-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Your candidates shortlist</h1>
        <p className="text-gray-600 mb-4">
          Delivered on <span className="text-black">March 18</span>
        </p>
      </header>
      <div className="mb-6">
        <h3 className="text-xl font-bold mr-2 my-0 mb-2">Job Position</h3>
        <h4 className="text-mb text-black font-semibold mr-2 my-0 mb-1">
          {jobTitle}
        </h4>
        <div className="flex">
          <Typography className="text-sm mb-4 text-gray-900">
            {jobLocation}
          </Typography>
          <Typography className="text-sm mb-4 text-gray-900 mx-2">
            {' • '}
          </Typography>
          <Typography className="text-sm mb-4 text-gray-900">
            {companyTeam}
          </Typography>
        </div>
      </div>
    </div>
  )
}
