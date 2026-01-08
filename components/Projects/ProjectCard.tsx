import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({img,title,description,tech1,tech2,tech3,tech4}:any) => {
  return (
   <section className="py-10">
 

  <div className="flex flex-wrap justify-center gap-10">
    
    {/* Project Card */}
    <div className="text-center p-2  w-[400px] flex flex-col items-center gap-4 rounded-xl  z-100 cursor-pointer hover:scale-105 transition-all duration-500">
      <div className=''>
        <Image
        src={img}
        alt="UI UX Project"
        width={350}
        height={350}
        className="rounded-md w-full ring-gray-300"
      />
      </div> 
      <div className='flex flex-col items-start'>
        <h1 className="text-sm   font-bold text-cyan-300">{title}</h1>
        <p className="text-[12px] text-gray-300 mt-2 text-left">
          {description}
        </p>
      </div>
      <div className='flex flex-wrap gap-2 items-start flex-row'>
        <div className='bg-slate-600 px-2 py-1 rounded-xl text-slate-200 text-xs'>{tech1}</div>
        <div className='bg-slate-600 px-2 py-1 rounded-xl text-slate-200 text-xs'>{tech2}</div>
        <div className='bg-slate-600 px-2 py-1 rounded-xl text-slate-200 text-xs'>{tech3}</div>
        <div className='bg-slate-600 px-2 py-1 rounded-xl text-slate-200 text-xs'>{tech4}</div>
        
      </div>
    </div>

  </div>
</section>

  )
}

export default ProjectCard