import React from 'react'

export default function FeaturedEmployees(props) {
  const companyName = "Amazon"
  
  return (
    <div className="mb-[100px]">
      <header>
        <h4 className="text-lg text-center font-bold text-gray-800 mb-2">
          We're proud of our people
        </h4>
        <h2 className="text-5xl text-center font-bold mb-6">Our stars</h2>
        <p className="text-2xl text-center mb-14 w-3/4 mx-auto leading-10 text-gray-800">
        We're proud to showcase the exceptional individuals whose hard work, innovation, and dedication have made a significant impact and driven our success forward. 
        </p>
      </header>

      <div className="flex justify-around my-10">
        {['Jennifer', 'Alvin', 'Dany'].map((item) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[600px] flex flex-col">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-4 text-center">
              {item}
            </h5>
            <img
              className="flex-1 w-full h-full object-cover"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <div className="p-5 text-center">
              <h3 className="mb-2 font-bold text-xl">My favorite memory</h3>
              <p className="mb-2 text-md  font-normal text-gray-700 dark:text-gray-400">
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
