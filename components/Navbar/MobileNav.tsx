import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type props={
  open:boolean;
  closeMobileNav:()=>void 
}
const MobileNav = ({open,closeMobileNav}:props) => {

  const handleClose=()=>{
    closeMobileNav();
  }

  const handleOverlayClick=(e:React.MouseEvent)=>{
    if(e.target === e.currentTarget){
      closeMobileNav();
    }
  }

  const navOpen= open ? "translate-x-0" : "translate-x-full";

  return (
    
    <div>
    <div onClick={handleOverlayClick} className={`fixed inset-0 z-[100002] right-0 transfrom transition-all duration-500 bg-black opacity-70 w-full h-screen ${navOpen}`}></div>
        <div className={`text-white justify-center items-start  fixed  h-full w-[80%] mx-auto flex flex-col transform transition-all duration-500 delay-300 sm:w-[50%] bg-cyan-700 space-y-6  z-[100050] right-0 ${navOpen}`}> 
          {navLinks.map((link)=>{
            return <Link key={link.id} href={link.url}>
              <p className='text-base items-center w-fit ml-10 pb-1 sm:text-[30px] hover:text-cyan-500 transition-all underline transform duration-300 text-white font-bold text-[20px]'>{link.label}</p>
              </Link>
             })}
              <CgClose onClick={handleClose} className='absolute top-[0.7rem] right-[1.4rem] text-[30px] text-white sm:w-10 sm:h-6'/>
        </div>
       
    </div>
    
    
  )
}

export default MobileNav