import { ClipboardIcon } from '@heroicons/react/24/solid'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardJobPosting() {
  const jobTitle = 'Director of Software Engineering, AWS'
  const jobOverview =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'

  return (
    <div className="mb-8">
      <div className="flex items-center">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <ClipboardIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Job Posting</h3>
      </div>
      <Card className=" shadow-lg mx-2">
        <CardHeader floated={false} color="blue-gray">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {jobTitle}
            </Typography>
          </div>
          <Typography color="gray">{jobOverview}</Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Link to="posting">
            <Button size="lg" fullWidth={true}>
              View posting
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
