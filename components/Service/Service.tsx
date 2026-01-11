import React from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <div id="service" className='pt-20 pb-20'>
      <h1 className='text-xl sm:text-xl md:text-2xl lg:text-3xl text-center tracking-wide  font-bold mt-4 uppercase'>Collaborating with teams and  clients to <br /><span className='text-primary text-slate-600'>build impactful web solutions</span></h1>
      <div className='mt-10'>
        <ServiceCard />
      </div>
    </div>
  )
}

export default Service