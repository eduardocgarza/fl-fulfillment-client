import React from 'react'

export default function CompanyTeams(props) {
  return (
    <div className="my-[100px]">
      <header>
        <h4 className="text-lg text-center font-bold text-gray-800 mb-2">
          Areas of Work
        </h4>
        <h2 className="text-5xl text-center font-bold mb-6">Our teams</h2>
        <p className="text-2xl text-center mb-14 w-3/4 mx-auto leading-10 text-gray-800">
          Your specialty or ideal role may exist across many areas at Amazon.
          Explore a few to see which match your interests.
        </p>
      </header>
      <div className="flex flex-wrap justify-between my-10">
        {['Software', 'Hardware', 'Design', '', '', ''].map((item) => (
          <div className="w-[calc(50%-20px)] shadow-lg rounded-xl overflow-hidden my-2 flex">
            <img
              className="object-cover w-[150px] h-full"
              src="https://flowbite.com/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="p-4 leading-normal flex flex-col justify-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Team {item}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
