import React from "react"
import ShortlistCandidates from "./ShortlistCandidates"
import ShortlistFooter from "./ShortlistFooter"
import ShortlistHeader from "./ShortlistHeader"
import FeaturedShortlistCandidate from "./FeaturedShortlistCandidate"
import RecruiterRepresentative from "./RecruiterRepresentative"
import ShortlistOnboarding from "./ShortlistOnboarding"

export default function ShortlistPage() {
  return (
    <div className="container mx-auto bg-white my-8 py-8 px-6 rounded-xl shadow-lg">
      <section className="row flex">
        <section className="left w-1/2 px-2 border border-black">
          <ShortlistHeader />
          <FeaturedShortlistCandidate />
        </section>
        <section className="right w-1/2 px-2 border border-black">
          <RecruiterRepresentative />
          <ShortlistOnboarding />
        </section>
      </section>
      <section className="row border border-black">
        <ShortlistCandidates />
      </section>
      <section className="row border border-black">
        <ShortlistFooter />
      </section>
    </div>
  )
}
