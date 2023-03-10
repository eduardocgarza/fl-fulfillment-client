import React from 'react'
import { orderStages } from 'assets/orderStages'
import TimelineItem from './TimelineItem'

export default function OrderStatusTimeline() {
  return (
    <div className="mb-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center mb-1">
          The Hiring Timeline
        </h2>
        <p className="text-center text-md text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
      <div className="flex flex-wrap">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {orderStages.map((stage) => (
            <TimelineItem stage={stage} key={stage.id} />
          ))}
        </ol>
      </div>
    </div>
  )
}
