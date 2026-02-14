import Design from '@/animation/design'
import Full from '@/animation/full'
import Loader from '@/animation/ui'
import Web from '@/animation/web'
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'

export type ResumeCardProps={
  logo:string,
  role:string,
  company:string,
  desc:string
}
const WorkExperienceCard = ({logo, role, company, desc}:ResumeCardProps) =>  {
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
        <div
          className="text-center items-center flex flex-row gap-15 p-3 sm:w-[500px] md:w-[500px] lg:w-[500px] flex flex-row items-center gap-5 rounded-xl bg-gradient-to-r from-[#1e2939] to-[#1e2939]/5  transition"
        >
          <div className="mb-4">
            <Image src={logo} alt='logo' width={100} height={100} />
          </div>

        <div className=' flex flex-col items-center justify-center w-40'> 
          <h1 className="text-xl font-semibold">
            {role}
          </h1>

          <p className="text-sm text-cyan-400 mb-2">
            {company}
          </p>

          <p className="text-sm text-slate-400 line-clamp-2">
            {desc}
          </p>
          </div>
        </div>
      )
    </div>
  )
}

export default WorkExperienceCard
