import React from 'react'
import PostingRepresentative from './PostingRepresentative'
import { Button } from '@material-tailwind/react'

export default function JobPostingFooter(props) {
  const { posting } = props
  const { jobTitle, jobLocation, companyTeam, jobDescription } = posting
  return (
    <div>
      <div className="mb-12 text-center">
        <header className="mb-8">
          <h6 className="text-xs uppercase text-gray-700 font-bold mb-2">
            Ready to apply?
          </h6>
          <h2 className="text-5xl font-bold mb-2">{jobTitle}</h2>
          <h3 className="text-xl text-gray-800">{jobLocation}</h3>
          <h4 className="text-lg mb-6 text-gray-700">{companyTeam}</h4>
          <p className="text-xl w-4/5 mx-auto">{jobDescription}</p>
        </header>
        <div className="flex justify-center mb-[100px]">
          <Button className="rounded-full">Apply Now</Button>
        </div>
      </div>
      <header className="mb-[100px]">
        <h4 className="text-lg text-center font-bold text-gray-800 mb-2">
          Need some assistance?
        </h4>
        <h2 className="text-5xl text-center font-bold mb-6">Talk to our recruiters</h2>
        <p className="text-2xl text-center mb-14 w-3/4 mx-auto leading-10 text-gray-800">
          Get personalized support from our knowledgeable recruiters throughout the hiring process.
        </p>
      </header>
      <div className="flex justify-center bg-orange-100 rounded-3xl">
        <PostingRepresentative />
        <PostingRepresentative />
      </div>
    </div>
  )
}
