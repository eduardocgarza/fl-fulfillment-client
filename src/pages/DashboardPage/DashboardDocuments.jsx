import {
  CircleStackIcon,
  DocumentIcon,
  DocumentTextIcon,
  PaperClipIcon,
} from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardDocuments() {
  const testUrl =
    'https://doc-0c-5c-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/7g6rjpk64v4fk8osoeque7d9366sp47q/53j2lll9err5rtk8jidp75f0ak2a1p3u/1678406925000/3/102508328662054604107/APznzaYj1ihFh4NmbbNZVH1agrAjOkm9eIZealcis7hzl4CPJQZ3x8DK2ymkywkZFIN47MbYXLcWH80s8vo_H6cRVs1qitbI--WgBg3XlvZ9go60sTgT6GT0_YkWghuoFGpkXeyFhU0iQCx0NKsGgd053OD-TXpQsEEJU1cO0GnHPQq1EkVUMraRs8ZAP6vNoYQMztq-bIUyOnPSewRImBYqm34fWdsFDRT9Jhb-YmHq-ziQz_ausoaOEddIj9-2_HvIqX0oTfeVAS2QIXRoY-bc2a7qjBvMO02SPbM7r-vpIHXxp0X10wE_baRCVhDEG6uxZDfYJCnGvb-aCAUIhl5jibD7hD1voTYdUZtQvLF61udr63wiVTAM-jw5C5aL5SWS1WcdT2abZ8kWnkaFn-4IhApLjqb32A==?authuser=0&nonce=d09uj18cbq7n6&user=102508328662054604107&hash=livqa75ug0m21gf7oekrq8q9nveijbgc'
  return (
    <div className="mb-8">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <CircleStackIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Documents</h3>
      </div>
      <Link to={testUrl} target="_blank">
        <Button variant="text" className="flex items-center gap-3">
          <DocumentIcon strokeWidth={2} className="h-5 w-5" /> Services Proposal
        </Button>
      </Link>
      <Link to={testUrl} target="_blank">
        <Button variant="text" className="flex items-center gap-3">
          <DocumentTextIcon strokeWidth={2} className="h-5 w-5" /> Services
          Contract
        </Button>
      </Link>
      <Link to={testUrl} target="_blank">
        <Button variant="text" className="flex items-center gap-3">
          <DocumentTextIcon strokeWidth={2} className="h-5 w-5" /> Confidential
          Agreement (NDA)
        </Button>
      </Link>
      <Link to={testUrl} target="_blank" className='pointer-events-none'>
        <Button variant="text" className="flex items-center gap-3" disabled>
          <PaperClipIcon strokeWidth={2} className="h-5 w-5" /> Invoice #1 -
          Retainer Payment
        </Button>
      </Link>
      <Link to={testUrl} target="_blank" className='pointer-events-none'>
        <Button variant="text" className="flex items-center gap-3" disabled>
          <PaperClipIcon strokeWidth={2} className="h-5 w-5" /> Invoice #2 -
          Shortlist Delivery Payment
        </Button>
      </Link>
      <Link to={testUrl} target="_blank" className='pointer-events-none'>
        <Button variant="text" className="flex items-center gap-3" disabled>
          <PaperClipIcon strokeWidth={2} className="h-5 w-5" /> Invoice #3 -
          Placement Delivery Payment
        </Button>
      </Link>
    </div>
  )
}
