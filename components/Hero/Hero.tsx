"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import Particles from "./ParticalProps";
import Button from "@/animation/contact";
import Link from "next/link";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Loader from "@/animation/square";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const reactLogoRef = useRef<HTMLImageElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !reactLogoRef.current || !loaderRef.current) return;

    /* -------------------- SPLIT TEXT -------------------- */
    const split = new SplitText(heroRef.current, { type: "chars" });

    gsap.from(split.chars, {
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.04,
      delay: 0.3,
    });

    /* -------------------- FLOATING PROFILE IMAGE -------------------- */
    gsap.fromTo(
      "#hero-image",
      { y: 20 },
      {
        y: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );

    /* -------------------- REACT LOGO SCROLL (DOWN) -------------------- */
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const logoTween = gsap.fromTo(
      reactLogoRef.current,
      { y: 0 },
      {
        y: maxScroll,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    /* -------------------- LOADER COMES DOWN ON SCROLL -------------------- */
    const loaderTween = gsap.fromTo(
      loaderRef.current,
      { y: 0 },
      {
        y: maxScroll,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    /* -------------------- ROTATING REACT LOGO -------------------- */
    const rotateTween = gsap.to(reactLogoRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    return () => {
      split.revert();
      logoTween.kill();
      loaderTween.kill();
      rotateTween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center flex-col overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
        />
      </div>

      {/* React Logo */}
      <Image
        ref={reactLogoRef}
        src="/reactjs.png"
        alt="React Logo"
        width={100}
        height={100}
        className="fixed top-32 right-20 z-50 pointer-events-none hidden md:block"
      />

      {/* Loader (SCROLLS DOWN) */}
      <div
        ref={loaderRef}
        className="fixed top-130 left-20 z-50 hidden md:block"
      >
        <Loader />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-20 px-4">
        <Image
          id="hero-image"
          src="/santhosh.png"
          alt="Santhosh"
          width={200}
          height={200}
          className="rounded-full ring-4 ring-gray-300"
        />

        <h1
          ref={heroRef}
          className="mt-10 text-md sm:text-xl md:text-2xl lg:text-3xl text-center font-bold uppercase text-slate-300"
        >
          Crafting responsive, high-performance <br />
          <span>
            <span className="text-yellow-500">web</span> experiences.
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-md md:text-xl lg:text-2xl text-gray-300 flex gap-2 text-center">
          Hi! I'm Santhosh – A passionate
          <span className="text-cyan-500 font-semibold">
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>

        <Link href="/#projects">
          <button className="mt-6 px-5 py-2.5 flex items-center gap-2 rounded-xl bg-[#1e2939] hover:text-cyan-500 transition">
            Explore My Projects <BsArrowRight />
          </button>
        </Link>

        <div className="mt-6">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;







