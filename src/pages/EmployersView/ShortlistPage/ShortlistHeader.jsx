import React from 'react'
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { exampleJobPosting } from '../JobPostingPage/JobPostingPage'

export default function ShortlistHeader() {
  const posting = exampleJobPosting
  const { jobTitle, jobLocation, companyTeam, jobSummary } = posting

  return (
    <div className="mb-[60px]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Your candidates shortlist</h1>
        <p className="text-gray-600 mb-4">
          Delivered on <span className="text-black">March 18</span>
        </p>
      </header>
      <Link to="posting" className="block mb-6 bg-white hover:shadow-xl rounded-2xl py-10 px-8 shadow-lg mx-2">
        <h3 className="text-xl font-bold mr-2 my-0 mb-2">Your Job Posting</h3>
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
        <Typography className="text-sm mb-4 text-gray-900 leading-6">
          {jobSummary}
        </Typography>
      </Link>
    </div>
  )
}
