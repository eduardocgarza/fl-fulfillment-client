import ClusterNav from "components/ClusterNav/ClusterNav"
import React from "react"
import { Outlet } from "react-router-dom"

export default function ClusterRoot() {
  return (
    <div className="py-2 bg-gray-100 bg-yellow-200 min-h-screen h-full">
      <ClusterNav />
      <Outlet />
    </div>
  )
}
