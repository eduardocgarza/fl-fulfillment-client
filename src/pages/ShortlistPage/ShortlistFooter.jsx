import React from 'react'
import PostingRepresentative from 'pages/JobPostingPage/PostingRepresentative'

export default function ShortlistFooter() {
  return (
    <div>
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
