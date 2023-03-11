import React from 'react'

export default function AboutCompanyDescription(props) {
  return (
    <div className="flex my-10 py-8 mb-6 px-6">
      <div className="w-1/2">
        <h2 className="text-5xl font-bold mb-10">What we do</h2>
        <p className="text-lg leading-9 px-2 pr-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas neque
          sed, accusantium cupiditate aperiam ipsa facere ratione inventore
          deserunt beatae nostrum dignissimos sit possimus ipsum minima
          voluptates. Dolorem, eveniet harum. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quas neque sed, accusantium cupiditate
          aperiam ipsa facere ratione inventore deserunt beatae nostrum
          dignissimos sit possimus ipsum minima voluptates. Dolorem, eveniet
          harum.
        </p>
      </div>
      <div className="w-1/2 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.pexels.com/photos/3394217/pexels-photo-3394217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About Company"
        />
      </div>
    </div>
  )
}
