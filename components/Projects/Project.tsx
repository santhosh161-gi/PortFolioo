"use client"
import React from 'react'
import ProjectCard from './ProjectCard'


const Project = () => {
  return (
    <div id="projects" className='pt-20 pb-20'>
      <h1 className='text-xl text-center  font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl text-slate-400 mx-auto max-w-3xl' >
        A Collection Of <span className='text-cyan-200 uppercase ml-5'>My Projects</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto px-10'>
        <ProjectCard img="/iphone.png" title="iPhone Product Page Clone" description="A modern responsive iPhone Product Page designed using Figma and built with Next.js, typescript, Gsap, FireBase, Vercel & Tailwind CSS." tech1="Next.js" tech2="TypeScript" tech3="Tailwind CSS" tech4="Gsap, FireBase, Vercel"/>
        <ProjectCard img="/uiux2.png" title="UI/UX Dashboard" description="A modern responsive UI/UX portfolio designed using Figma and built with Next.js, typescript & Tailwind CSS." tech1="Next.js" tech2="TypeScript" tech3="Tailwind CSS" tech4="Figma"/>
        <ProjectCard img="/spider.png" title="Movie app" description="A modern responsive movie app designed using Figma and built with HTML, CSS & JavaScript." tech1="HTML" tech2="CSS" tech3="JavaScript" tech4="Figma"/>
        <ProjectCard img="/nike.png" title="Nike clone app" description="A modern responsive Nike clone app designed using Figma and built with HTML, CSS & JavaScript." tech1="HTML" tech2="CSS" tech3="JavaScript" tech4="Figma"/>
        <ProjectCard img="/ecomm.jpg" title="E-Commerce Website" description="A modern responsive E-Commerce Website designed using Figma and built with React.js, mySQL & Springboot." tech1="React.js" tech2="MySQL" tech3="Springboot" tech4="mySQL"/>
        <ProjectCard img="/netflix.png" title="Netflix Clone Website" description="A modern responsive Netflix Clone Website designed using Figma and built with Next.js, typescript, TMDB API & Tailwind CSS." tech1="Next.js" tech2="TypeScript" tech3="Tailwind CSS" tech4="TMDB API"/>
      </div>
    </div>
  )
}

export default Project