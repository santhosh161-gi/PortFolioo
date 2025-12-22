import Button from '@/animation/contact'
import React from 'react'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import Message from './Message'



const Contact = () => {
  return (
    <div id="contact" className="pt-20 pb-20">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 ">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8">

          <div className='flex flex-col gap-2'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Contact <span className="text-cyan-500">Me</span>
            </h1>
            <p className="mt-3 text-white font-semibold">
              Let’s build something amazing together 🚀
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div className="flex flex-col gap-6 text-gray-300">

            <div>
              <h1 className="text-lg font-semibold text-cyan-500">Address</h1>
              <p className="mt-1 flex items-center gap-2"> <CiLocationOn className='text-cyan-500' />Mangammal Salai, Panagudi, Tirunelveli, Tamil Nadu, India</p>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-cyan-500">Phone</h1>
              <p className="mt-1 flex items-center gap-2"><IoCallOutline className='text-cyan-500' />+91 8682950963</p>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-cyan-500">Email</h1>
              <p className="mt-1 flex items-center gap-2"><CiMail className='text-cyan-500' />santhoshmathavan165@gmail.com</p>
            </div>

            <div>
              <Button />
            </div>

          </div>

          {/* CTA BUTTON */}

        </div>

        {/* RIGHT SIDE (OPTIONAL – FORM / IMAGE) */}
        <div className="hidden lg:flex items-center justify-center">
          <Message />
        </div>

      </div>
    </div>

  )
}

export default Contact