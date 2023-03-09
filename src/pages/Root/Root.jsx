import MainNav from 'components/MainNav/MainNav'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <MainNav />
      <Outlet />
    </div>
  )
}
