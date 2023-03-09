import MainNav from "components/MainNav/MainNav"
import React from "react"
import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <div className="py-2 bg-gray-100">
      <MainNav />
      <Outlet />
    </div>
  )
}
