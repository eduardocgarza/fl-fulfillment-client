import { Button } from '@material-tailwind/react'
import React from 'react'

export default function CandidateFAQs() {
  const questions = [
    "Tell me about a project you worked on that you're particularly proud of.",
    'How do you collaborate with team members and communicate technical information to non-technical colleagues?',
    'What is your experience with agile development methodologies?',
    'How do you approach problem-solving when you encounter a technical challenge?',
    'What motivated you to pursue a career in tech, and what do you hope to achieve in the future?',
  ]

  return (
    <div className='mb-6'>
      <h2 className="font-bold text-center">CandidateFAQs</h2>
      <div className="flex">
        <div className="w-2/3 p-2">
          {questions.map((question) => (
            <button className="text-center text-lg bg-white hover:bg-gray-50 p-2 mb-3 rounded-2xl shadow-lg w-full">{question}</button>
          ))}
        </div>
        <div className="w-1/">
          <iframe
            width={'100%'}
            height={'100%'}
            // width="475"
            // height="845"
            src="https://www.youtube.com/embed/F12PJgyVKyA"
            title="How to Make a YouTube Short"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
