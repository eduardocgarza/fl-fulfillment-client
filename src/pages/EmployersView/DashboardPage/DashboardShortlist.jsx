import { QueueListIcon } from '@heroicons/react/24/solid'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from '@material-tailwind/react'
import React from 'react'
import DashboardShortlistCandidate from './DashboardShortlistCandidate'

export default function DashboardShortlist() {
  return (
    <div className="mb-[60px]">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <QueueListIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Candidates Shortlist</h3>
      </div>

      <div className='flex justify-around px-2'>
        <DashboardShortlistCandidate />
        <DashboardShortlistCandidate />
      </div>

      <div className="flex justify-center items-center">
        <Button size="lg" className="rounded-3xl">View all</Button>
      </div>
    </div>
  )
}
