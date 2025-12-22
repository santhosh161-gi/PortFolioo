import React from 'react'
import Image from 'next/image'
import ResumeCard from './ResumeCard'
import EducationCard from './EducationCard'

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-20">
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE – INTERNSHIPS */}
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-white">
            Internships
          </h1>
          <div className="mt-10">
            <ResumeCard />
          </div>
        </div>

        {/* RIGHT SIDE – EDUCATION */}
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-white">
            Education
          </h1>
          <div className="mt-10 flex flex-col gap-10 items-center">
            <EducationCard role="B.E in Mechanical Engineering" college="Anna University Regional Campus Tirunelveli" year="2020-2024" cgpa="7.71" img="/graduation.png" />
            <EducationCard role="High School" college="St,Anns Metric Higher Secondary School" year="2019-2020" cgpa="74%  " img="/school.png" />
            <EducationCard role="Secondary School" college="St,Anns Metric Higher Secondary School" year="2016-2017" cgpa="85%" img="/school.png" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Resume