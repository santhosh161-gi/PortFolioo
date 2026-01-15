"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Certificatepage() {
  const certificate = [
    {
      img: "/jpimg.png",
      title: "JPMorgan Chase & Co. – Software Engineering Job Simulation Certificate",
      description:
        "Successfully completed the JPMorgan Chase & Co. Software Engineering Job Simulation Certificate, gaining hands-on experience in real-world software engineering tasks, problem-solving, and industry-standard development practices",
      year: "2026",
    },
    {
      img: "/Course Certificate.jpg",
      title: "Java Full Stack Development",
      description: "Completed comprehensive training in Java Full Stack Development covering Core Java, Spring Boot, Hibernate, RESTful APIs, frontend technologies, database integration, and full-stack application development.",
      year: "2025",
    },
    {
      img: "/udemy.png",
      title: "Mastering AI on AWS – AWS Certified AI Practitioner",
      description:
        "Gained foundational knowledge of Artificial Intelligence and Machine Learning concepts using AWS services, including model training basics, AI use cases, cloud-based AI workflows, and responsible AI principles aligned with AWS Certified AI Practitioner standards.",
      year: "2025",
    },
    {
      img: "/hp.png",
      title: "AI for Beginners",
      description:
        "Learned core AI fundamentals including machine learning concepts, data-driven decision-making, real-world AI applications, and ethical considerations.",
      year: "2025",
    },
    {
      img: "/simply.png",
      title: "Introduction to Front-End Development",
      description:
        "Gained hands-on exposure to front-end development concepts including HTML, CSS, JavaScript, and responsive design principles.",
      year: "2025",
    },
    {
      img: "/udemy2.png",
      title: "HTML & CSS for Beginners: Basic to Advanced",
      description:
        "Developed strong front-end fundamentals by building responsive web pages using HTML5, CSS3, Flexbox, Grid, and modern UI practices.",
      year: "2025",
    },
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-full flex justify-center px-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {certificate.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="bg-black border-none">
                <CardContent className="p-6">
                  
                  {/* MAIN FLEX CONTAINER */}
                  <div className="flex flex-col lg:flex-row items-center gap-6">

                    {/* IMAGE */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <Image
                        src={item.img}
                        alt="Certificate"
                        width={500}
                        height={300}
                        className="w-full max-w-md rounded-md object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-3 text-center lg:text-left">
                      <h1 className="text-lg lg:text-2xl font-bold text-white">
                        {item.title}
                      </h1>
                      <p className="text-sm text-slate-400 line-clamp-3">
                        {item.description}
                      </p>
                      <span className="text-white font-medium">
                        {item.year}
                      </span>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

