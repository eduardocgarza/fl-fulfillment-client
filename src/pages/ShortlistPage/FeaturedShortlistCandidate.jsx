import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import { exampleJobPosting } from 'pages/JobPostingPage/JobPostingPage'
import FeaturedCandidate from './FeaturedCandidate'

export default function FeaturedShortlistCandidate() {
  const posting = exampleJobPosting
  const { jobTitle, jobLocation, companyTeam } = posting

  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <StarIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold mr-2 my-0">Top matches</h3>
      </div>
      <Typography className="mb-4 text-gray-900">
        These are the top matches for this job posting. You can view all the
        candidates in the shortlist below and explore each candidate's profile
        in detail by clicking on their name.
      </Typography>
      <div className='flex justify-around py-[60px]'>
        <FeaturedCandidate />
        <FeaturedCandidate />
      </div>
    </div>
  )
}
