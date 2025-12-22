"use client"
import Checkbox from '@/animation/burger';
import Button from '@/animation/download';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';


type props = {
    openMobileNav: () => void
}
const Nav = ({ openMobileNav }: props) => {

    const [navbg, setnavbg] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setnavbg(true)
            }
            else {
                setnavbg(false)
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <div className={`transition-all duration-300  h-[11vh] z-[10000] fixed  w-full ${navbg ? "bg-[#0f142ed9] shadow-lg" : "fixed"}`}>
            <div className='flex justify-between items-center h-full w-[90%] mx-auto'>
                {/* lOGO */}
                <div className='flex  items-center gap-4'>
                    <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center flex-col'>
                        <Image src="/logo.png" alt="logo" width={40} height={40} />
                    </div>
                    <div className='flex flex-col items-center '>
                        <div className=' sm:block hidden md:text-[20px] lg:text-[20px] font-bold text-white bg-clip-text text-transparent'>Santhosh Mathavan </div>

                    </div>
                </div>
                {/* NAVLinks */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url} className='text-base hover:text-cyan-500 transition-all duration-300 text-white font-medium'>{link.label}</Link>
                    ))}
                </div>
                {/* buttons */}
                <div className='flex items-center gap-5'>
                    <div className='flex items-center'>
                        <Button />
                    </div>
                    <div>
                        <div className='lg:hidden' onClick={openMobileNav}>
                            <Checkbox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav