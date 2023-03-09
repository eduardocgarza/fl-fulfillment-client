import React from 'react'

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          repellendus totam cupiditate ullam provident explicabo ipsam nobis
          officia officiis, repudiandae aspernatur quos voluptate laborum maxime
          facilis? Unde id minima accusantium.
        </p>

        <h2>Onboarding and Learning Materials</h2>
        <div className="p-4 bg-orange-300"> test</div>
        <div className="p-6 bg-orange-300">
          <iframe
            width="640"
            height="400"
            src="https://www.loom.com/embed/221f217704be4b668928c1a4cacb2f0e"
            frameBorder="0"
            allowFullScreen
            // @ts-ignore
            mozallowfullscreen
            allowfullscreen
            title="Loom Onboarding Video"
          ></iframe>
        </div>
        {/* Onboarding Explanation Video */}
        {/* Timeline of Stages */}
        {/* View Successful Case Study */}

        <h2>Documents</h2>
        <ul>
          <li>
            <a href="#" target="_blank">
              Services Proposal
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Services Contract
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Confidential Agreement (NDA)
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Invoice #1 - Retainer Payment
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Invoice #2 - Shortlist Delivery Payment
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Invoice #3 - Placement Delivery Payment
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2>Order Status</h2>
        {/* Add Block */}
      </div>

      <div>
        <h2>ROI Calculator</h2>
        {/* Add Block */}
      </div>

      <div>
        <h2>Job Posting</h2>
        {/* Add Block */}
      </div>

      <div>
        <h2>Candidates Shortlist</h2>
        {/* Add Block */}
      </div>

      <div>
        <h2>Settings</h2>
        {/* Add Block */}
      </div>
    </div>
  )
}
