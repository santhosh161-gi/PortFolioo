import React from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <div id="service" className='pt-20 pb-20'>
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-wide  font-bold mt-4'>Collaborating with teams and  clients to <br /><span className='text-primary text-cyan-500'>build impactful web solutions</span></h1>
      <div className='mt-15'>
        <ServiceCard />
      </div>
    </div>
  )
}

export default Service