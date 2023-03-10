import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@material-tailwind/react'
import { orderStages } from 'assets/orderStages'
import loader from './test.json'
import Lottie from 'react-lottie'
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'

import OrderStage1 from "./FeaturedOrderStages/OrderStage1"
import OrderStage2 from "./FeaturedOrderStages/OrderStage2"
import OrderStage3 from "./FeaturedOrderStages/OrderStage3"
import OrderStage4 from "./FeaturedOrderStages/OrderStage4"
import OrderStage5 from "./FeaturedOrderStages/OrderStage5"
import OrderStage6 from "./FeaturedOrderStages/OrderStage6"
import OrderStage7 from "./FeaturedOrderStages/OrderStage7"
import OrderStage8 from "./FeaturedOrderStages/OrderStage8"
import OrderStage9 from "./FeaturedOrderStages/OrderStage9"
import OrderStage10 from "./FeaturedOrderStages/OrderStage10"
import OrderStage11 from "./FeaturedOrderStages/OrderStage11"
import OrderStage12 from "./FeaturedOrderStages/OrderStage12"
import OrderStage13 from "./FeaturedOrderStages/OrderStage13"

import OrderStageAnimation1 from "./OrderStageAnimations/OrderStageAnimation1.json"
import OrderStageAnimation2 from "./OrderStageAnimations/OrderStageAnimation2.json"
import OrderStageAnimation3 from "./OrderStageAnimations/OrderStageAnimation3.json"
import OrderStageAnimation4 from "./OrderStageAnimations/OrderStageAnimation4.json"
import OrderStageAnimation5 from "./OrderStageAnimations/OrderStageAnimation5.json"
import OrderStageAnimation6 from "./OrderStageAnimations/OrderStageAnimation6.json"
import OrderStageAnimation7 from "./OrderStageAnimations/OrderStageAnimation7.json"
import OrderStageAnimation8 from "./OrderStageAnimations/OrderStageAnimation8.json"
import OrderStageAnimation9 from "./OrderStageAnimations/OrderStageAnimation9.json"
import OrderStageAnimation10 from "./OrderStageAnimations/OrderStageAnimation10.json"
import OrderStageAnimation11 from "./OrderStageAnimations/OrderStageAnimation11.json"
import OrderStageAnimation12 from "./OrderStageAnimations/OrderStageAnimation12.json"
import OrderStageAnimation13 from "./OrderStageAnimations/OrderStageAnimation13.json"

// Create a switch-statement for the 13 stages to render it as the featured stage 

export default function FeaturedOrderStage() {
  const currentStage = 4
  const stage = orderStages[currentStage]

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: OrderStageAnimation10,
  }

  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <StarIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold mr-2 my-0">Current Stage</h3>
        <Typography variant="h6" color="blue-gray" className="font-medium mt-1">
          {stage.title}
        </Typography>
      </div>
      <div className="my-6">
        <Lottie options={lottieOptions} style={{ height: 250 }} />
      </div>
      <Typography className="mb-4 text-gray-900">
        {stage.message}
      </Typography>
      <div className="flex justify-center">
        <Button size="lg">{stage.cta}</Button>
      </div>
    </div>
  )
}
