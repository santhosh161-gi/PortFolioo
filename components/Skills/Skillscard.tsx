import React from 'react'
import { SiCss3, SiDocker, SiFigma, SiFlutter, SiGit, SiGithub, SiHtml5, SiJavascript, SiJquery, SiLaravel, SiLinux, SiMongodb, SiMysql, SiReact, SiSpringboot, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { LiaJava } from "react-icons/lia";
const Skillscard = () => {

    const skills=[
        {
            id:1,
            name:"HTML",
            img:<SiHtml5 size={50}/>,
            
        },
        {
            id:2,
            name:"CSS",
            img:<SiCss3 size={50}/>,
            
        },
        {
            id:3,
            name:"JavaScript",
            img:<SiJavascript size={50}/>,
            
        },
        {
            id:4,
            name:"jQuery",
            img:<SiJquery size={50}/>,      
            
        },
        {
            id:5,
            name:"React.js",
            img:<SiReact size={50}/>,
            
        },
        {
            id:6,
            name:"Tailwind CSS",
            img:<SiTailwindcss size={50}/>,
            
        },
        {
            id:7,
            name:"Figma",
            img:<SiFigma size={50}/>,
            
        },
        {
            id:8,
            name:"Git",
            img:<SiGit size={50}/>,
            
        },
        {
            id:9,
            name:"GitHub",
            img:<SiGithub size={50}/>,
            
        },
        {
            id:10,
            name:"Springboot",
            img:<SiSpringboot size={50}/>,
            
        },
        {
            id:11,
            name:"mySQL",
            img:<SiMysql size={50}/>,
            
        },
        {
            id:12,
            name:"MongoDB",
            img:<SiMongodb size={50}/>,
            
        },{
            id:13,
            name:"Next.js",
            img:<TbBrandNextjs size={50}/>,    
            
        },{
            id:14,
            name:"Node.js",
            img:<DiNodejs size={50}/>,
            
        },{
            id:15,
            name:"Java",
            img:<LiaJava size={50}/>,
            
        },
        {
            id:16,
            name:"React Native",
            img:<SiReact size={50}/>,
            
        },
        {
            id:17,
            name:"Linux",
            img:<SiLinux size={50}/>,
            
        },
        {
            id:18,
            name:"Docker",
            img:<SiDocker size={50}/>,
            
        },
        {
            id:19,
            name:"vercel",
            img:<TbBrandVercel size={50}/>,

        }
    
    ]
  return (
    <div className='flex flex-wrap items-center justify-center gap-5'>
        {
            skills.map((skill)=>(
                <div key={skill.id} className='flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 '>
                    <div className='w-24 h-24 text-white flex items-center justify-center'>
                        {skill.img}
                    </div>
                    <div className='text-slate-400 text-center '>{skill.name}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Skillscard