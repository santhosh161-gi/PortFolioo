import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'

const EducationCard = ({role, college, year, cgpa, img}: {role: string, college: string, year: string, cgpa: string, img: string}) => {
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
    <div className='text-center p-6 sm:w-[500px] md:w-[500px] lg:w-[500px] flex flex-row items-center gap-10 rounded-xl bg-gradient-to-r from-[#1e2939] to-[#1e2939]/5  rounded-r-none   transition' id='box'>
        <div>
            <Image src={img} width={60} height={60} alt="Education"/>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <h1 className="text-xl font-semibold ">
                {role}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mb-2">
               {college}
            </p>
            <p className="text-sm font-semibold text-slate-400 line-clamp-2">
               {year} <span className='text-cyan-400 font-semibold ml-5'>CGPA:{cgpa}</span>
            </p>
           
        </div>
    </div>
  )
}

export default EducationCard