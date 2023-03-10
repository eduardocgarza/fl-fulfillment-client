import React from 'react'
import { useParams } from 'react-router-dom'
import CandidateOverview from './CandidateOverview'
import CandidateSkills from './CandidateSkills'
import CandidateCharacteristics from './CandidateCharacteristics'
import CandidateProjects from './CandidateProjects'
import CandidateMatchRanking from './CandidateMatchRanking'
import CandidateFAQs from './CandidateFAQs'
import CandidateWriteups from './CandidateWriteups'
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function CandidatePage() {
  const { candidateId } = useParams()
  const candidateName = 'John Doe'

  return (
    <div className='my-6 py-8 shadow-xl min-h-screen flex'>
      <div id="btn-left" className="min-h-full w-[75px] bg-gray-50 hover:bg-gray-100">
        <button className="w-full h-full border-red-400 flex justify-center items-center">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>
      <div id="main" className="bg-white flex-1">

        <section className="row flex bg-orange-100 mb-2">
          <section className="left w-1/2">
            <CandidateOverview />
            <CandidateSkills />
            <CandidateCharacteristics />
            <CandidateProjects />
          </section>
          <section className="right w-1/2">
            <CandidateMatchRanking />
            <CandidateFAQs />
          </section>
        </section>
        <section>
          <CandidateWriteups />
        </section>
      </div>
      <div id="btn-right" className="min-h-full w-[75px] bg-gray-50 hover:bg-gray-100">
        <button className="w-full h-full border-red-400 flex justify-center items-center">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
