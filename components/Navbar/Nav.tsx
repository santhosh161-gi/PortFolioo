"use client";

import Checkbox from "@/animation/burger";
import Button from "@/animation/download";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

type Props = {
  openMobileNav: () => void;
};

const Nav = ({ openMobileNav }: Props) => {
  const [navbg, setnavbg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setnavbg(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // 🔥 GSAP Gradient Animation
    gsap.to("#name", {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 h-[11vh] z-[10000] fixed w-full ${
        navbg ? "bg-[#0f142ed9] shadow-lg" : ""
      }`}
    >
      <div className="flex justify-between items-center h-full w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </div>

          <div className="flex flex-col items-center">
            <div
              id="name"
              className="
                hidden sm:block
                md:text-[20px] lg:text-[20px]
                font-bold
                bg-gradient-to-r
                from via-[#00f2fe] to-white
                bg-[length:200%_200%]
                bg-clip-text text-transparent
              
              "
            >
              Santhosh Mathavan
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-cyan-500 transition-all duration-300 text-white font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-5">
          <Button />
          <div className="lg:hidden" onClick={openMobileNav}>
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
