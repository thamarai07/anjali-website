
import MainLayout from '@/components/Layuout/MainLayout'
import Head from 'next/head'
import CourseHero from '@/container/course/hero'
import React from 'react'
import { CourseContent } from '../../utils/links'
import IdealFor from '@/container/course/IdealFor'
import CourseForm from '@/container/course/CourseForm'
import ScopeofCourse from '@/container/course/ScopeofCourse'
import AnjaliStats from '@/container/AnjaliStats'
import Testimonial from '@/container/Testimonial'
import Image from 'next/image'
export default function Courses() {
  return (
    <>
    <Head>
    <title>Anjali Computer Education | ISO Certified</title>
    <meta
      name="description"
      content="Begin your career journey with Anjali Computer Education, offering world-class training and advanced courses to help you excel in the ever-evolving tech industry."
    />
    <meta
      name="keywords"
      content="Anjali Computer Education, ISO Certified, programming courses, coding classes, software development, web development, Python, Java, C++, soft skills, communication training, leadership skills, data science, machine learning, artificial intelligence, Tally ERP 9, accounting software, hardware repair, multimedia design, graphic design, video editing, animation, IT certification, networking, cybersecurity, database management, IT project management, software engineering, job-oriented courses, industry-ready skills"
    />
  </Head>

  <MainLayout>
    {/* <Image src={"/contactus/cuteanimated_353.jpg"} className='opacity-5' width={1200} height={800} alt='contactus' /> */}

    <p className="text-black font-semibold text-[16px] p-20 leading-10 tracking-wider" >
  Welcome to our Contact Us page, where your queries find a swift resolution! At Anjalicomputereducation, we take pride in our dedicated customer care service, committed to providing you with comprehensive information and assistance. Our efficient team ensures that your inquiries are addressed promptly, guaranteeing a response within 24 hours. Your satisfaction is our priority, and we strive to make your experience seamless. Feel free to reach out, and let us assist you in any way we can. Thank you for choosing Anjalicomputereducation.
</p>

  </MainLayout>
</>
  )
}
