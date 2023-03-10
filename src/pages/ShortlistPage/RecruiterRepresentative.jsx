import { StarIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import React from 'react'

const ReviewStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 text-yellow-600"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
)

export default function RecruiterRepresentative() {
  const recruiterUrl =
    'https://media.licdn.com/dms/image/C5603AQEg8CxTCDY4UA/profile-displayphoto-shrink_200_200/0/1637341764472?e=1683763200&v=beta&t=s14_iD2qzZNYGy2_qyFY811TYH6nb70CwWlItoCzTQI'
  const recruiterName = 'Eduardo Garza'
  const recruiterTitle = 'Executive Tech Recruiter'
  const recruiterLocation = 'Vancouver, Canada'

  return (
    <div className="mb-10">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <StarIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold mr-2 my-0">
          Your recruiter representative
        </h3>
      </div>
      <Typography className="mb-4 text-gray-900">
        These are the top matches for this job posting. You can view all the
        candidates in the shortlist below and explore each candidate's profile
        in detail by clicking on their name.
      </Typography>

      <div className="bg-white border border-white shadow-lg  rounded-3xl p-4">
        <div className="flex-none sm:flex">
          <div className=" relative h-32 w-32   sm:mb-0 mb-3">
            <img
              src={recruiterUrl}
              alt={recruiterName}
              className=" w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-auto sm:ml-5 justify-evenly">
            <div className="flex items-center justify-between sm:mt-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">
                    {recruiterName}
                  </div>
                  <div className="flex-auto text-gray-700 my-1">
                    <span className="text-sm mr-3 ">{recruiterTitle}</span>
                    <span className="text-sm mr-3 border-r border-gray-200  max-h-0" />
                    <span className="text-sm">{recruiterLocation}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((v) => (
                  <ReviewStar />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
