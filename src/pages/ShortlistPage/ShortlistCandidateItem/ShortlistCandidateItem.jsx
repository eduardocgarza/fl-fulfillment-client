import React from 'react'
import CandidateHeader from './CandidateHeader'
import CandidateSkills from './CandidateSkills'
import CandidateSummary from './CandidateSummary'
import CandidateControls from './CandidateControls'
import CandidateRankings from './CandidateRankings'

export default function ShortlistCandidateItem({ candidate }) {
  const matchText = `${candidate.percentageMatch}% Match`
  return (
    <div className="mb-10">
      <div className="flex justify-center bg-orange">
        <h2 className="uppercase text-xs text-center font-semibold inline-block bg-yellow-600 mx-auto text-gray-900 rounded-t-2xl px-6 py-2 pt-3">
          {matchText}
        </h2>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg flex">
        <section id="left" className="w-3/5">
          <CandidateHeader candidate={candidate} />
          <CandidateSkills candidate={candidate} />
          <CandidateSummary candidate={candidate} />
        </section>
        <section id="right" className="w-2/5">
          <CandidateControls />
          <CandidateRankings rankings={candidate.rankings} />
        </section>
      </div>
    </div>
  )
}
