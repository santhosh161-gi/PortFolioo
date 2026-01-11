import React from "react";
import Image from "next/image"; 
import Link from "next/link";     
import { link } from "fs";

interface ProjectDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    img: string;
}
const ProjectDetails = ({ isOpen, onClose, title, description, img }: ProjectDetailsProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex flex-wrap items-center justify-center bg-black/50 bg-opacity-50 ">
      <div className="relative w-full max-w-2xl p-4">
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">

          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-600">
            <h3 className="text-md md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>

            <button
              onClick={onClose}
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-6 flex lg:flex-row flex-col items-center gap-5">
            <div className="flex justify-center md:justify-start">
            <Image
            src={img}
            alt={title}
            width={500}
            height={500}
            className="w-full h-auto "
            />
            </div>
            <div className="flex flex-col items-start">
            <p className="text-base md:text-sm lg:text-md text-gray-600 dark:text-gray-300 font-semibold">
              {description}
            </p>
            <div className="flex flex-col items-center mt-3">
                <Link href={'https://github.com/santhosh161-gi'} target="_blank" className="text-white hover:underline hover:text-white transition hover:scale-110 duration-300 rounded-md px-2 py-1 bg-slate-500">GitHub</Link>
            </div>
            </div>
            
          </div>

          {/* Footer (optional) */}
          <div className="flex justify-end p-4 border-t dark:border-gray-600">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
