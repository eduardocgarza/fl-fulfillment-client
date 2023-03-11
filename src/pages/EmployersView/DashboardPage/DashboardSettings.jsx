import React from 'react'
import { BellIcon, CogIcon, StarIcon } from '@heroicons/react/24/solid'

export default function DashboardSettings() {
  return (
    <div className="mb-6 border border-black">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <StarIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Recent Activity</h3>
      </div>
      
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <CogIcon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Settings</h3>
      </div>

      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <BellIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Notifications</h3>
      </div>
    </div>
  )
}
