import React from 'react'
import DashboardDocuments from './DashboardDocuments'
import DashboardOrientation from './DashboardOrientation'
import DashboardGreeting from './DashboardGreeting'
import DashboardJobPosting from './DashboardJobPosting'
import DashboardOrderStatus from './DashboardOrderStatus'
import DashboardShortlist from './DashboardShortlist'
import DashboardSettings from './DashboardSettings'

export default function DashboardPage() {
  return (
    <div className="bg-white shadow-xl py-8 px-2 rounded-2xl container mx-auto my-6 flex">
      <section id="left" className="w-1/2 px-6">
        <DashboardGreeting />
        <DashboardOrientation />
        <DashboardDocuments />
        <DashboardJobPosting />
      </section>
      <section id="right" className="w-1/2 px-6">
        <DashboardOrderStatus />
        <DashboardShortlist />
        <DashboardSettings />
      </section>
    </div>
  )
}
