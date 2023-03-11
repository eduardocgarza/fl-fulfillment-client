import React from 'react'
import { candidateShortlist } from './candidateShortlist'
import ShortlistCandidateItem from './ShortlistCandidateItem/ShortlistCandidateItem'

export default function ShortlistCandidates() {
  return (
    <div className="mb-[100px] py-[150px] bg-black">
      <section className="px-6">
        {candidateShortlist.map((candidate) => (
          <ShortlistCandidateItem candidate={candidate} />
        ))}
      </section>
    </div>
  )
}
