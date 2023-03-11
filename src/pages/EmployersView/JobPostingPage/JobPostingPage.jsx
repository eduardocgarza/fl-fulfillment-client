import React from 'react'
import JobPostingHeader from './JobPostingHeader'
import JobPostingVideo from './JobPostingVideo'
import JobPostingInformation from './JobPostingInformation'
import AboutCompanyHeader from './AboutCompanyHeader'
import AboutCompanyDescription from './AboutCompanyDescription'
import CompanyTeams from './CompanyTeams'
import CompanyLocations from './CompanyLocations'
import FeaturedEmployees from './FeaturedEmployees'
import CompanyBenefits from './CompanyBenefits'
import CompanyValues from './CompanyValues'
import JobPostingFooter from './JobPostingFooter'

// Move the const variables to a single const object called exampleJobPosting containing all the data for this single job posting
export const exampleJobPosting = {
  jobTitle: 'CA Technical Specialist',
  jobLocation: 'Vancouver, Canada',
  companyName: 'Amazon',
  companyTeam: 'Hardware Team',
  jobSummary: `After customers purchase our products, you’re the one who helps them get more out of their new Apple technology. Your day in the Apple Store is filled with a range of focused support and service tasks. Whether you’re helping customers get started with the Mac or finding answers to their questions about other Apple devices, you’re ready to share knowledge and provide exceptional assistance. You gain satisfaction from bringing resolution and insight to each customer, elevating his or her relationship with Apple to the next level.\n\nBoth full-time and part-time jobs are available.`,
  keyQualifications: [
    'Ability to assess customers’ support needs when they arrive, then provide solutions or refer them to other team members',
    'Flexibility to regularly rotate through different technical specialties and skill sets',
    'Ability to thrive on change as products evolve',
    'Ability to take initiative and proactively identify opportunities to improve the customer experience',
    'Ability to build strong relationships with customers and teammates',
    'Ability to work both independently and as part of a team',
    'Ability to multitask, prioritize, and manage time effectively',
    'Ability to communicate clearly and effectively',
    'Ability to work a flexible schedule that includes evenings, holidays, and weekends',
  ],
  jobDescription: `As a member of the Apple Store team, you’re the face of Apple, delivering the very best in customer service. You’re also the person who keeps the store running smoothly, from taking inventory to making sure the store looks its best. You’re proud to represent Apple, and you get great satisfaction from helping customers develop lifelong relationships with Apple.`,
  additionalRequirements: [
    'High school or equivalent (Required)',
    '1 year of customer service experience (Preferred)',
  ],
  companyDescription: `Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make decisions quickly, and are not afraid to fail. We have the scope and capabilities of a large company, and the spirit and heart of a small one.`,
}

// Pass the exampleJobPosting object to all the child components
export default function JobPostingPage() {
  return (
    <div className="bg-white shadow-xl py-12 rounded-2xl container mx-auto my-6 min-h-full h-full">
      <section className="px-6">
        <JobPostingHeader posting={exampleJobPosting}  />
        <JobPostingVideo posting={exampleJobPosting} />
        <JobPostingInformation posting={exampleJobPosting} />
      </section>
      <AboutCompanyHeader posting={exampleJobPosting} />
      <section className="px-6">
        <AboutCompanyDescription posting={exampleJobPosting} />
        <CompanyTeams posting={exampleJobPosting} />
        <CompanyLocations posting={exampleJobPosting} />
        <FeaturedEmployees posting={exampleJobPosting} />
        <CompanyBenefits posting={exampleJobPosting} />
        <CompanyValues posting={exampleJobPosting} />
        <JobPostingFooter posting={exampleJobPosting} />
      </section>
    </div>
  )
}
