import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import ActivityItem from './ActivityItem'

export default function OrderStatusUpdates() {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <StarIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Recent Activity</h3>
      </div>

      <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          January 13th, 2022
        </time>
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          {[1, 2, 3].map((v) => (
            <ActivityItem />
          ))}
        </ol>
      </div>
      <div className="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          January 12th, 2022
        </time>
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          {[1, 2, 3].map((v) => (
            <ActivityItem />
          ))}
        </ol>
      </div>
    </div>
  )
}
