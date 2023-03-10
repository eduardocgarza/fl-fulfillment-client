import { ClipboardIcon } from '@heroicons/react/24/solid'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react'
import { exampleJobPosting } from 'pages/JobPostingPage/JobPostingPage'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardJobPosting() {
  const posting = exampleJobPosting
  const jobOverview = `${posting.jobSummary.slice(0, 290)}...`
  
  return (
    <div className="mb-8">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shadow-lg">
          <ClipboardIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Job Posting</h3>
      </div>
      <Card className="shadow-lg mx-2">
        <CardHeader floated={false}>
          <iframe
            src="https://www.loom.com/embed/221f217704be4b668928c1a4cacb2f0e"
            className="w-full h-[400px] rounded-2xl"
            allowFullScreen
            title="Loom Onboarding Video"
          ></iframe>
        </CardHeader>
        <CardBody>
          <div className="mb-1 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-bold">
              {posting.jobTitle}
            </Typography>
          </div>
          <div className="flex mb-2">
            <p className="mb-1 text-sm mx-1">{posting.jobLocation}</p>
            <p className="mb-1 text-sm mx-1">{' • '}</p>
            <p className="mb-1 text-sm mx-1">{posting.companyTeam}</p>
          </div>
          <Typography color="gray">{jobOverview}</Typography>
        </CardBody>
        <CardFooter className="flex justify-center mx-auto">
          <Link to="posting">
            <Button size="lg" className='mt-0 rounded-full'>
              View posting
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
