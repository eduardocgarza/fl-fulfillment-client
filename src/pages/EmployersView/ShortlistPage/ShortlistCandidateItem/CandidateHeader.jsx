import { StarIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import CandidateLinks from './CandidateLinks'
import { Link } from 'react-router-dom'

export default function CandidateHeader({ candidate }) {
  const companyUrl = 'https://google.com/'
  const {
    photoUrl,
    fullName,
    summary,
    percentageMatch,
    currentTitle,
    currentCompany,
    location,
    linkedinUrl,
    websiteUrl,
    githubUrl,
    twitterUrl,
    resumeUrl,
    coverLetterUrl,
    rankings,
    desiredCompensation,
    interpersonalCharacteristics,
    technicalSkills,
  } = candidate

  const rawCompensation = desiredCompensation.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const compensation = rawCompensation.substring(
    0,
    rawCompensation.indexOf('.'),
  )

  return (
    <div className="flex items-center border-b border-gray-200 pb-6 px-4 mr-4">
      <img
        alt={fullName}
        className="block w-[120px] h-[120px] rounded-full mr-2 shadow-lg"
        src={photoUrl}
      />
      <section className="ml-3 flex-1">
        <header className="flex justify-between items-center mr-6 mb-4">
          <h2 className="text-3xl font-bold flex-1">{fullName}</h2>
          <CandidateLinks />
        </header>

        <section>
          <div className="flex items-center mb-1">
            <p className="text-sm leading-normal text-gray-700">
              {currentTitle}
            </p>
            <Typography className="text-sm text-gray-900 mx-2">
              {' • '}
            </Typography>
            <p className="text-sm leading-normal text-blue-600 hover:text-blue-800">
              <Link target="_blank" to={companyUrl} className="block">
                {currentCompany}
              </Link>
            </p>
            <Typography className="text-sm text-gray-900 mx-2">
              {' • '}
            </Typography>
            <p className="text-sm leading-normal text-gray-700">{location}</p>
          </div>
          <div className="mb-1">
            <p className="text-sm leading-normal text-gray-900">
              Desired Compensation:{' '}
              <span className="text-gray-700 font-normal">{compensation}</span>
            </p>
          </div>
        </section>
      </section>
    </div>
  )
}
