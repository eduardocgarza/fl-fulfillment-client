import React from 'react'

export default function CandidateRankingItem(props) {
  const { title, value, color } = props
  const { background: backgroundColor, text: textColor } = color
  const childClasses = `${backgroundColor} ${textColor} rounded-full text-xs font-medium text-center p-0.5 `
  
  return (
    <div className="flex items-center mb-2 p-4 bg-white shadow-lg rounded-xl">
      <div className="w-2/5 mb-1 dark:text-white">
        <p className="">{title}</p>
      </div>
      <div className="w-3/5 bg-gray-200 rounded-full ml-4">
        <div
          className={childClasses}
          style={{ width: `${value}%` }}
        >
          {value}
        </div>
      </div>
    </div>
  )
}
