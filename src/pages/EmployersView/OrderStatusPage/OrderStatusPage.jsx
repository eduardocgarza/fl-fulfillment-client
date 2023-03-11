import React from 'react'
import OrderStatusHeader from './OrderStatusHeader'
import FeaturedOrderStage from './FeaturedOrderStage'
import OrderStatusOnboarding from './OrderStatusOnboarding'
import OrderStatusUpdates from './OrderStatusUpdates'
import OrderStatusTimeline from './OrderStatusTimeline'

export default function OrderStatusPage() {
  return (
    <div className="bg-white shadow-xl py-8 px-2 rounded-2xl container mx-auto my-6">
      <div className="flex flex-wrap mb-6">
        <section id="left" className="w-1/2 px-6">
          <OrderStatusHeader />
          <FeaturedOrderStage />
        </section>
        <section id="right" className="w-1/2 px-6">
          <OrderStatusOnboarding />
        </section>
      </div>
      <div className="flex flex-wrap mb-6">
        <section id="left" className="w-1/2 px-6">
          <OrderStatusTimeline />
        </section>
        <section id="right" className="w-1/2 px-6">
          <OrderStatusUpdates />
        </section>
      </div>
    </div>
  )
}
