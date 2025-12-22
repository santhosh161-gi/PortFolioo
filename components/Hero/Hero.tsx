"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs'
import Particles from './ParticalProps'
import Button from '@/animation/contact'
import router from 'next/router'
import Link from 'next/link'

const Hero = () => {
  return (
    <div id="home" className='relative h-screen flex items-center justify-center flex-col overflow-hidden'>
      <div className='absolute inset-0 w-full h-full z-0'>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className='relative z-10 flex flex-col  items-center mt-20 '>
        <Image src="/santhosh.jpeg" alt="Hero" width={200} height={200} className='rounded-full h-[250px] w-[250px] ring-3  ring-gray-300' />
        <h1 className='mt-10  text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-wide  font-bold mt-4'>Crafting responsive,high-performance <br /><span className='text-cyan-500'> web experiences.</span></h1>
        {/* <h2 className=' mt-4 text-sm px-2 sm:text-xl font-semibold  flex items-center text-gray-500 mt-2 text-center'>
            I design and develop fast, user-friendly web applications with modern technologies.
            </h2> */}
        <p className='mt-4 text-md px-2 sm:text-xl font-medium  flex items-center text-gray-300 mt-2 text-center'>
          Hi! I'm Santhosh - A passionate
          <span className='text-cyan-300 font-bold'>
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
                wrapperClassName: 'pl-2'
              }}

            />
          </span>
        </p>
        <div>
          <Link href="/#projects">
            <button className='bg-[#1e2939] text-white px-4 py-2 text-sm inline-flex justify-center items-center gap-2 rounded-xl mt-6  hover:bg-slate-800 transition-all duration-300 hover:text-cyan-500 '>Explore my Projects <BsArrowRight /></button>
          </Link>
        </div>
        <div className='mt-6'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Hero