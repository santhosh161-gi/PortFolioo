

import React from 'react'

const Message = () => {
  return (
  <div className='md:p-10 p-6 bg-[#131332] rounded-xl  flex flex-col gap-5'>
        <div>
            <input type="text" placeholder='Name' className=' p-2 rounded-lg  px-4 py-2 bg-[#363659] text-white placeholder:text-gray-400 w-[350px]' />
        </div>
        <div>
            <input type="text" placeholder='Email' className='w-full p-2 rounded-lg px-4 py-2 bg-[#363659] text-white placeholder:text-gray-400 w-[350px]' />
        </div>
        <div>
            <input type="text" placeholder='Subject' className='w-full p-2 rounded-lg px-4 py-2 bg-[#363659] text-white placeholder:text-gray-400 w-[350px]' />
        </div>
        <div>
            <textarea placeholder='Message' className='w-full p-2 rounded-lg px-4 py-2 bg-[#363659] text-white placeholder:text-gray-400 w-[350px]' />
        </div>
        <div>
            <button className='w-full p-2 rounded-lg px-4 py-2 bg-[#363659] text-white placeholder:text-gray-400'>Send Message</button>
        </div>

    </div>
  )
}

export default Message
