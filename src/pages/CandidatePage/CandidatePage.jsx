import React from 'react'
import { useParams } from 'react-router-dom'

export default function CandidatePage() {
  const { candidateId } = useParams()
  const candidateName = 'John Doe'

  // Candidate Information
  // Full Name (First Name, Middle Name, Last Name)
  // Current Role or Last Role
  // 60-Second Video Introduction
  // FAQs Video Responses
  // FL Recommendation – Percentage Match (%)
  // FL Recommendation – Percentage Competence (%)
  // Education
  // Technical Skills
  // Career Experience & Accomplishments
  // Team and Role Fit
  // Meets or Exceed Objectives
  // Set of Technical Skills (Ranked)
  // Set of Personal Characteristics (Ranked)
  // Set of Projects
  // Text Writeups
  // Executive Summary
  // Education and Experience
  // Meets or Exceeds Objectives
  // Team / Role Fit
  // Location and Travel
  // Desired Compensation
  // Experience and Accomplishments
  // Links and Documents
  // Linkedin
  // Github
  // Website
  // Cover Letter
  // Resume

  // Candidate Information
  // Videos – Candidate FAQs Video Responses
  // Video – Interpersonal Interview Video
  // Video – Technical Interview Video
  // Document – Resume
  // Document – Cover Letter
  // Link – Website
  // Link – Github

  return (
    <div>
      <h1>Candidate - {candidateName}</h1>
    </div>
  )
}
