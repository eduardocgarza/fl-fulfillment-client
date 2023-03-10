import { Button } from '@material-tailwind/react'
import React from 'react'

export default function JobPostingHeader(props) {
  const { posting } = props
  const { jobTitle, jobLocation, companyTeam } = posting

  return (
    <div className="mb-12 text-center">
      <header className="mb-4">
        <h6 className="text-xs uppercase text-gray-700 font-bold mb-2">Job Posting</h6>
        <h2 className="text-5xl font-bold mb-2">{jobTitle}</h2>
        <h3 className="text-xl text-gray-800">{jobLocation}</h3>
        <h4 className="text-lg text-gray-700">{companyTeam}</h4>
      </header>
      <div className="flex justify-center">
        <Button className='rounded-full'>Apply Now</Button>
      </div>
    </div>
  )
}
