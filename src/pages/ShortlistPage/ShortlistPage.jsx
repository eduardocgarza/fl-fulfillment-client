import React from 'react'
import { Link } from 'react-router-dom'

export default function ShortlistPage() {
  return (
    <div>
      <h1>Shortlist</h1>
      <div>

        <h2>Schedule Interviews</h2>
        <p>Schedule Interviews with Shortlisted Candidates</p>
        
        <h2>Shortlisted Candidates</h2>
        <table>
          <tr>
            <td>Full Name</td>
            <td>Current Role</td>
            <td>% Match</td>
            <td>% Competence</td>
            <td>Linkedin</td>
            <td>Github</td>
            <td>Website</td>
            <td>Cover Letter</td>
            <td><Link to="/candidates/eduardo-garza">Profile</Link></td>
            <td>Resume</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>Current Role</td>
            <td>% Match</td>
            <td>% Competence</td>
            <td>Linkedin</td>
            <td>Github</td>
            <td>Website</td>
            <td>Cover Letter</td>
            <td><Link to="/candidates/eduardo-garza">Profile</Link></td>
            <td>Resume</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>Current Role</td>
            <td>% Match</td>
            <td>% Competence</td>
            <td>Linkedin</td>
            <td>Github</td>
            <td>Website</td>
            <td>Cover Letter</td>
            <td><Link to="/candidates/eduardo-garza">Profile</Link></td>
            <td>Resume</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>Current Role</td>
            <td>% Match</td>
            <td>% Competence</td>
            <td>Linkedin</td>
            <td>Github</td>
            <td>Website</td>
            <td>Cover Letter</td>
            <td><Link to="/candidates/eduardo-garza">Profile</Link></td>
            <td>Resume</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
