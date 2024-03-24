import Link from 'next/link'
import React, { useState } from 'react'
import { GiMaterialsScience } from "react-icons/gi";
import { TbTallymarks } from "react-icons/tb";
import { SiSap } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiDotnet } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiPhp , } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { GrMultimedia } from "react-icons/gr";
import { GrCloudComputer } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import Image from 'next/image';
function InnerCoursesTrend() {

    const [Hover,setHover] = useState(false)
   
    const Course = [
        // {
        //     id : 1,
        //     course : "Data science",
        //     herf : "#"
        // },
        {
            id : 2,
            course : "Tally Prime",
            href : "tally_prime"

        },
        {
            id : 5 ,
            course : "AngularJS",
            href : "angularjs_web_dev"
        },
        {
            id : 6,
            course : "Microsoftoffice",
            href : "mswindows"
        }
        // {
        //     id : 3,
        //     course : "SAP",
        //     herf : "#"

        // },
     
    ]
  return (
    <>
    <p className=' md:text-[20px] text-[18px] font-extrabold mb-2 mt-6'>
            Our Courses <span className={`text-[20px] ${Hover == true && "text-red-500"}`}>(ISO Certified)</span>
          </p>
    <div className='flex gap-10 flex-wrap px-4 mt-6' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        {
            Course.map((values)=>(
                <>
                <div className=' border shadow-md text-white px-4  rounded text-[22px] font-medium '>
                <Link href={values.href} className='flex justify-center py-4 px-2'>
                {values.id == 1 && <GiMaterialsScience size={60} className="bg-blue-500 p-1"/>}
                {values.id == 2 && <TbTallymarks size={60} className="bg-blue-500 p-1 rounded"/>}
                {values.id == 3 && <SiSap size={60} className="bg-orange-400 p-1 "  />}
                {values.id == 4 &&  <FaNetworkWired size={40}/>}
                {values.id == 5 && <FaAngular size={60} className="bg-red-500 p-1 rounded"/>}
                {values.id == 6 && <SiMicrosoftoffice size={60} className="bg-indigo-500 p-1 rounded"/>}
                {values.id == 7 && <SiCplusplus size={40}/>}
                {values.id == 8 && <FaJava size={40}/>}
                {values.id == 9 && <DiDotnet size={40}/>}
                {values.id == 10 &&<GrMysql size={40}/>}
                {values.id == 11 &&<SiPhp size={40}/>}
                {values.id == 12 &&<SiPython size={40}/>}
                {values.id == 13 &&<GrMultimedia size={40}/>}
                {values.id == 14 &&<GrCloudComputer size={40}/>}
                {values.id == 15 &&<IoHardwareChip size={40}/>}
                {values.id == 16 && <Image src={"/assets/autocad.svg"} height={40} width={40} alt='autocad' className='text-white'/>}                
                </Link>
                <Link href={values.href} key={values.id} className='text-black text-center block text-[18px] font-bold w-[100%]'>{values.course}</Link>
                </div>

                </>
            ))
        }
    </div>
    </>
  )
}

export default InnerCoursesTrend
