"use client"
import React from 'react'
import ProjectCard from './ProjectCard'


const Project = () => {
  return (
    <div id="projects" className='pt-20 pb-20'>
      <h1 className='text-xl text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl text-white mx-auto max-w-2xl' >
        A Collection of <span className='text-cyan-500 '>My Projects</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 mx-auto px-10'>
        <ProjectCard img="/uiux.png" title="UI/UX Student Dashboard" description="A modern responsive UI/UX portfolio designed using Figma and built with Next.js, typescript & Tailwind CSS." />
        <ProjectCard img="/uiux2.png" title="UI/UX Dashboard" description="A modern responsive UI/UX portfolio designed using Figma and built with Next.js, typescript & Tailwind CSS." />
        <ProjectCard img="/spider.png" title="Movie app" description="A modern responsive movie app designed using Figma and built with HTML, CSS & JavaScript." />
        <ProjectCard img="/nike.png" title="Nike clone app" description="A modern responsive Nike clone app designed using Figma and built with HTML, CSS & JavaScript." />
        <ProjectCard img="/ecomm.jpg" title="E-Commerce Website" description="A modern responsive E-Commerce Website designed using Figma and built with React.js, mySQL & Springboot." />
      </div>
    </div>
  )
}

export default Project