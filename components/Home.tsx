"use client";

import React from 'react'
import Hero from './Hero/Hero'
import Service from './Service/Service'
import Resume from './Resume/Resume'
import Project from './Projects/Project'
import Skills from './Skills/Skills'

import Contact from './Contact/Contact'
import { Certificatepage } from './Certificates/Certificatepage';
import Cer from './Certificates/Cer';

const HomePage = () => {
  return (
    <div className='overflow-hidden h-full'>
      <Hero/>
      <Service/>
      <Cer/>
      <Resume/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default HomePage
