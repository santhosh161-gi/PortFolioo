import Design from '@/animation/design'
import Full from '@/animation/full'
import Loader from '@/animation/ui'
import Web from '@/animation/web'
import React from 'react'

const ServiceCard = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
    {[
      {
        logo:<Loader/>,
        title: "UI & UX Development",
        desc: "Designing intuitive and user-friendly interfaces with a focus on usability.",
      },
      {
        logo:<Web/>,
        title: "Web & Mobile Apps",
        desc: "Building responsive applications that work across all devices.",
      },
      {
        logo:<Design/>,
        title: "Frontend Engineering",
        desc: "Developing modern UIs using React, Next.js, and Tailwind CSS.",
      },
      {
        logo:<Full/>,
        title: "Full Stack Development",
        desc: "Creating complete web solutions with frontend and backend integration.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="text-center p-6 rounded-xl bg-[#1e2939] hover:bg-white/10 transition"
      >
        <div>{item.logo}</div>
        <h3 className="text-md font-semibold mb-3 mt-4">
          {item.title}
        </h3>
        <p className="text-sm text-slate-400">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
  )
}

export default ServiceCard