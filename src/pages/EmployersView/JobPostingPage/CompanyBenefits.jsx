import React from 'react'

const benefits = [
  {
    name: 'Health',
    description:
      'Coverage for medical expenses, including doctor visits, hospitalizations, and prescription drugs.',
  },
  {
    name: 'Dental',
    description:
      'Coverage for dental procedures, including routine cleanings, fillings, and extractions.',
  },
  {
    name: 'Vision',
    description:
      'Coverage for eye exams, glasses, contact lenses, and other vision-related expenses.',
  },
  {
    name: 'Life',
    description:
      "Financial protection for the employee's family or designated beneficiaries in the event of the employee's death.",
  },
  {
    name: 'Disability',
    description:
      'Income replacement if the employee becomes unable to work due to an injury or illness.',
  },
  {
    name: '401k',
    description:
      'Retirement savings plan that allows employees to contribute a portion of their pre-tax income, with possible employer matching.',
  },
]

export default function CompanyBenefits(props) {
  return (
    <div className="mb-[100px]">
      <header>
        <h4 className="text-lg text-center font-bold text-gray-800 mb-2">
          We in invest in you
        </h4>
        <h2 className="text-5xl text-center font-bold mb-6">
          Our Comprehensive Benefits Package
        </h2>
        <p className="text-2xl text-center mb-14 w-3/4 mx-auto leading-10 text-gray-800">
        Our benefits are designed to support your physical, financial, and emotional health, so you can focus on your work and thrive.
        </p>
      </header>

      <div className="flex flex-wrap justify-around">
        {benefits.map((benefit) => (
          <div className="w-[calc(33%-20px)] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-10 text-center">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {benefit.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
