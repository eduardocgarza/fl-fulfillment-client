import React, { useEffect, useState } from 'react'

export default function OrderStatusHeader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1
        } else {
          return 0
        }
      })
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mb-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Working on your order ...</h1>
        <p className="text-gray-600 mb-4">
          Estimated delivery on <span className="text-black">March 18</span>
        </p>
      </header>

      <div id="progress-bar" className="flex my-4">
        <div className="mx-1 w-1/4 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: '100%' }}
          ></div>
        </div>
        <div className="mx-1 w-1/4 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 overflow-hidden">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mx-1 w-1/4 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: '0%' }}
          ></div>
        </div>
        <div className="mx-1 w-1/4 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
