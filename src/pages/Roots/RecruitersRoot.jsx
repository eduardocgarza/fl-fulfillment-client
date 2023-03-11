import React from "react"
import { Outlet } from "react-router-dom"
import RecruitersNav from "components/RecruitersNav/RecruitersNav"

export default function RecruitersRoot() {
  return (
    <div className="py-2 bg-gray-100 min-h-screen h-full">
      <RecruitersNav />
      <Outlet />
    </div>
  )
}
