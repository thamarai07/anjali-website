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
import JobRole from '@/container/JobRole'
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
    <div className='lg:max-w-[1200px] m-auto lg:px-10 '>
       
        <div className='mt-20 mb-20'>
        <AnjaliStats/>
        </div>
        <Testimonial/>
    </div>
  </MainLayout>
</>
  )
}
