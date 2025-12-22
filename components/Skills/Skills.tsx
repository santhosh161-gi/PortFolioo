import React from 'react'
import Skillscard from './Skillscard'

const Skills = () => {
  return (
    <div id="skills" className='pt-20 pb-20'>
      <div className='w-[90%] sm:w-[80%] mx-auto'>
        <div>
          <h1 className='text-2xl text-center font-bold sm:text-3xl md:text-4xl text-white'>
            My <span className='text-cyan-500'>Skills</span>
          </h1>
        </div>
        <div className='mt-10'>
          <Skillscard />
        </div>
      </div>
    </div>
  )
}

export default Skills