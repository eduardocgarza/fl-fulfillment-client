import { ChartBarIcon } from '@heroicons/react/24/solid'
import FeaturedOrderStage from 'pages/OrderStatusPage/FeaturedOrderStage'
import React from 'react'

export default function DashboardOrderStatus() {
  return (
    <div className="mb-[60px]">
      {/* <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <ChartBarIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Order Status</h3>
      </div> */}

      <FeaturedOrderStage />

    </div>
  )
}
