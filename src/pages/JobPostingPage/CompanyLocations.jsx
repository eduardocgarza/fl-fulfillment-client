import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react'
import React from 'react'

export default function CompanyLocations(props) {
  return (
    <div className="mb-[100px]">
      <header>
        <h4 className="text-lg text-center font-bold text-gray-800 mb-2">
          Where to find us
        </h4>
        <h2 className="text-5xl text-center font-bold mb-6">Our locations</h2>
        <p className="text-2xl text-center mb-14 w-3/4 mx-auto leading-10 text-gray-800">
          You’ll find smart, passionate people working in cities all over the world. Join us where you are. Or where you want to be.
        </p>
      </header>
      <div className="flex justify-around my-10">
        {['Vancouver', 'Toronto', 'Montreal'].map((item) => (
          <Card
            shadow={true}
            className="relative grid h-[40rem] items-end justify-center overflow-hidden text-center w-[calc(33%-20px)] shadow-xl"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-900/75 via-gray-900/40" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="font-bold leading-[1.5]"
              >
                {item}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
