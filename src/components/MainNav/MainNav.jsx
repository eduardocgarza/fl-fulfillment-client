import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
  return (
    <div>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/status">Order Status</Link>
      </li>
      <li>
      <Link to="/calculator">ROI Calculator</Link>
      </li>
      <li>
        <Link to="/posting">Job Posting</Link>
      </li>
      <li>
        <Link to="/candidates">Shortlist</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </div>
  )
}
