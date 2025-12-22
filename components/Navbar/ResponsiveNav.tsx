
"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [open,setOpen]=useState(false);

  const openMobileNav=()=>{
    setOpen(true);
  }

  const closeMobileNav=()=>{
    setOpen(false);
  }
  return (
    <>
    <Nav openMobileNav={openMobileNav}/>
    <MobileNav open={open} closeMobileNav={closeMobileNav}/>
    </>
  )
}

export default ResponsiveNav