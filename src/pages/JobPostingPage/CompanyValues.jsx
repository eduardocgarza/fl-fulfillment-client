import React from 'react'

const companyValues = [
  {
    name: 'Integrity',
    description: 'We act with honesty and transparency in all our dealings.',
  },
  {
    name: 'Innovation',
    description:
      'We embrace creativity and experimentation to drive growth and change.',
  },
  {
    name: 'Diversity',
    description:
      'We celebrate our differences and create a culture of inclusion and respect.',
  },
  {
    name: 'Collaboration',
    description:
      'We work as a team, share knowledge and support each other to achieve common goals.',
  },
]

export default function CompanyValues(props) {
  return (
    <div className="mb-[100px]">
      <header>
        <h4 className="text-lg text-center font-bold text-gray-800 mb-2">
          Embrace Our Values, Shape Our Future
        </h4>
        <h2 className="text-5xl text-center font-bold mb-6">
          Our company values
        </h2>
        <p className="text-2xl text-center mb-14 w-3/4 mx-auto leading-10 text-gray-800">
          Our values guide us in everything we do, from collaborating with our colleagues to delivering top-notch products and services to our customers. 
        </p>
      </header>

      <div className="flex flex-wrap justify-around">
        {companyValues.map((value) => (
          <div className="w-[calc(50%-20px)] bg-gray-100 rounded-xl mb-10 py-20 px-8">
              <h5 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {value.name}
              </h5>
            <p className="mb-3 text-2xl font-normal text-gray-900 dark:text-gray-400 w-4/5">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
