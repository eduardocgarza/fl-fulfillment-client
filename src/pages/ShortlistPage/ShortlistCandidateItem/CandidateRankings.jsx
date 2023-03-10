import React from 'react'
import CandidateRankingItem from './CandidateRankingItem'

const PROGRESS_COLORS = {
  blue: {
    background: 'bg-blue-600',
    text: 'text-white',
  },
  red: {
    background: 'bg-red-600',
    text: 'text-white',
  },
  green: {
    background: 'bg-green-600',
    text: 'text-white',
  },
  yellow: {
    background: 'bg-yellow-400',
    text: 'text-gray-800',
  },
  indigo: {
    background: 'bg-indigo-600',
    text: 'text-white',
  },
  purple: {
    background: 'bg-purple-600',
    text: 'text-white',
  },
}

export default function CandidateRankings({ rankings }) {
  const {
    educationPercentage,
    experiencePercentage,
    technicalSkillsPercentage,
    objectivesPercentage,
    companyFitPercentage,
    locationFitPercentage,
  } = rankings

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Candidate Skills</h2>
      <CandidateRankingItem
        color={PROGRESS_COLORS.blue}
        title="Education"
        value={educationPercentage}
      />
      <CandidateRankingItem
        color={PROGRESS_COLORS.green}
        title="Career experience"
        value={experiencePercentage}
      />
      <CandidateRankingItem
        color={PROGRESS_COLORS.indigo}
        title="Technical skills"
        value={technicalSkillsPercentage}
      />
      <CandidateRankingItem
        color={PROGRESS_COLORS.purple}
        title="Career accomplishments"
        value={objectivesPercentage}
      />
      <CandidateRankingItem
        color={PROGRESS_COLORS.red}
        title="Company and team fit"
        value={companyFitPercentage}
      />
      <CandidateRankingItem
        color={PROGRESS_COLORS.yellow}
        title="Location fit"
        value={locationFitPercentage}
      />
    </div>
  )
}
