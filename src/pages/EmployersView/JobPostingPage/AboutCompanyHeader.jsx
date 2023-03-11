import React from 'react'

export default function AboutCompanyHeader(props) {
  const { posting } = props
  const { companyName } = posting
  return (
    <div className="bg-black text-white text-center w-full h-[750px] flex flex-col items-center justify-center">
      <h2
        className="font-bold"
        style={{
          marginTop: '0px',
          marginBottom: '10px',
          fontFamily: 'Helvetica, sans-serif',
          fontSize: '3.5rem',
          background:
            'linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Work at {companyName}
      </h2>
      <h3 className="text-5xl font-bold mb-10">
        Join a team and inspire the work.
      </h3>
      <p className="text-3xl w-3/4 mx-auto gray-50 leading-10">
        Discover how you can make an impact: see our areas of work, worldwide
        locations and opportunities for students.
      </p>
    </div>
  )
}
