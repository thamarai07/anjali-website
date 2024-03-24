import Link from "next/link";
import React, { useState } from "react";

import { FcApproval } from "react-icons/fc";
import { FcClock } from "react-icons/fc";

import Image from "next/image";
function Courses() {
  const [Hover, setHover] = useState(false);
  const [CourseId, setCourseId] = useState<number>();

  const Course = [
    {
      id: 7,
      course: "MASTER DIPLOMA IN PYTHON TECHNOLOGY",
      herf: "/python_with_django/",
      duration: "7 Months",
      thumpnail: "/courseimages/python/python01=2.avif",
      content:
        "Master the world of Python technology with our comprehensive diploma program!",
    },
    {
      id: 8,
      course: "ADVANCED DIPLOMA IN JAVA TECHNOLOGY",
      herf: "/java_programming/",
      duration: "3 Months",

      thumpnail: "/courseimages/java/java1.avif",
      content: "Excel in Java technology with our advanced diploma program!",
    },
    {
      id: 12,
      course: "ADVANCED DIPLOMA IN .NET TECHNOLOGY",
      herf: "/dot_net_technology/",
      duration: "3 Months",
      thumpnail: "/courseimages/c_c++/c1.avif",
      content:
        "Dive into the advanced realms of .NET technology with our comprehensive diploma program",
    },
    {
      id: 5,
      course: "ANGULAR JS",
      herf: "/angularjs_web_dev/",
      duration: "3 Months",

      content:
        "Empower your web apps with AngularJS for seamless innovation and user experiences!",
      thumpnail: "/courseimages/angularjs/angularjs.jpg",
    },
  ];

  const handleCourseCard = (id: number) => {
    setCourseId(id);
    setHover(true);
  };
  return (
    <>
      <p className="text-center md:text-[45px] text-[30px] font-semibold  lg:mt-[80px] mt-10 mb-[60px] antialiased">
        Our Courses{" "}
        <span className={`text-[20px] ${Hover == true && "text-red-500"}`}>
          (ISO Certified)
        </span>
      </p>
      {/* <div className='flex justify-center flex-wrap px-4 ' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        {
            Course.map((values)=>(
                <>
                <div className='bg-green-700 hover:bg-yellow-500 text-white px-4 py-2  m-5 rounded text-[22px] font-medium '>
                <div className='flex justify-center py-4 px-2'>
                {values.id == 1 && <GiMaterialsScience size={40}/>}
                {values.id == 2 && <TbTallymarks size={40}/>}
                {values.id == 3 && <SiSap size={40}/>}
                {values.id == 4 &&  <FaNetworkWired size={40}/>}
                {values.id == 5 && <FaAngular size={40}/>}
                {values.id == 6 && <SiMicrosoftoffice size={40}/>}
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
                </div>
                <Link href={values.herf} key={values.id} className='text-centre'>{values.course}</Link>
                </div>

                </>
            ))
        }
    </div> */}
      <div className="flex lg:flex-row flex-col justify-center items-center gap-6 w-[100%] mb-[80px]">
        {Course.map((values) => (
          <>
            <div
              className=" rounded-[20px] w-[300px] shadow-green-500 border border-green-500 shadow-md"
              onMouseEnter={() => handleCourseCard(values.id)}
            >
              <Image
                src={values.thumpnail}
                width={300}
                height={120}
                alt={values.course}
                className="rounded-t-md"
              />
              <div className="px-4 mt-4">
                <p className="text-[18px] pt-4 font-extrabold text-blue-500 h-[70px] tracking-wide">
                  {values.course}
                </p>
                <div className="mt-6 mb-4 flex ">
                  <div className="w-[45%] bg-gray-100  hover:bg-white pt-[6px] rounded shadow">
                    <FcClock
                      className={"flex w-[100%] text-gray-400 z"}
                      size={20}
                    />
                    <p className="text-[14px] text-center mt-1 font-medium">
                      {values.duration}
                    </p>
                  </div>
                  <div className="w-[5%]"></div>
                  <div className="w-[45%] bg-gray-100  hover:bg-white  pt-[6px] rounded shadow">
                    <FcApproval
                      className={"flex w-[100%]  text-[#0BDA51]"}
                      size={20}
                      color="red"
                    />
                    <p className="text-[14px] text-center mt-1 font-medium">
                      ISO
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href={"/course"+values.herf}
                className=" hover:bg-blue-500 bg-[#0BDA51]  text-[16px] font-semibold text-white px-4 py-1 m-auto block text-center mt-6 w-[50%] rounded mb-6"
              >
                KnowMore
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Courses;
