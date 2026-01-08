import Design from '@/animation/design'
import Full from '@/animation/full'
import Loader from '@/animation/ui'
import Web from '@/animation/web'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'
const WorkExperienceCard = () => {
  useEffect(() => {
    gsap.fromTo("#box", {
      x:-100,
      duration:1,
      ease:"power2.out",
      delay:1,
      scrollTrigger:{
        trigger:"#box",
        start:"top 80%",
        toggleActions:"play none none none",
      }
    },
    {
      x:10,
      duration:1,
      ease:"power2.out",
      delay:1,
      scrollTrigger:{
        trigger:"#box",
        start:"top 80%",
        toggleActions:"play none none none",
      }
    });
  }, []);
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6" id='box'>
      {[
        {
          logo: <Image src="/working.png" alt="Hero" width={150} height={150} className='rounded-full' />,
          role: "Frontend Developer Intern",
          company: "KGiSL - Coimbatore",
          desc: "Worked on building responsive UI components and improving user experience using modern frontend tools.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="text-center p-6 sm:w-[500px] md:w-[500px] lg:w-[500px] flex flex-row items-center gap-4 rounded-xl bg-gradient-to-r from-[#1e2939] to-[#1e2939]/5  transition"
        >
          <div className="mb-4">{item.logo}</div>

        <div>
          <h1 className="text-xl font-semibold">
            {item.role}
          </h1>

          <p className="text-sm text-cyan-400 mb-2">
            {item.company}
          </p>

          <p className="text-sm text-slate-400 line-clamp-2">
            {item.desc}
          </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkExperienceCard
