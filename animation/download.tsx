"use client"
import React from 'react';

const Button = () => {
  return (
    <a href="/SanthoshMathavanRNew.pdf" download="SanthoshMathavanRNew.pdf" className="cursor-pointer flex justify-center items-center gap-4 bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500  font-bold w-[150px]">
      Resume
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-sky-500 hover:text-sky-600 animate-bounce">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg>
    </a>
  );
}

export default Button;

