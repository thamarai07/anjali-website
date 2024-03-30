import MainLayout from "@/components/Layuout/MainLayout";
import Head from "next/head";
import CourseHero from "@/container/course/hero";
import React from "react";
import { CourseContent } from "../../utils/links";
import IdealFor from "@/container/course/IdealFor";
import CourseForm from "@/container/course/CourseForm";
import ScopeofCourse from "@/container/course/ScopeofCourse";
import AnjaliStats from "@/container/AnjaliStats";
import Testimonial from "@/container/Testimonial";
import Image from "next/image";
import { AddsAccordion } from "@/components/contactus/contact";
import Form from "@/container/contactus/form";
export default function Courses() {
  return (
    <>
      <Head>
        <title>Contact Us - Anjali Computer Education </title>
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
        <AddsAccordion />
        {/* <Image src={"/contactus/cuteanimated_353.jpg"} className='opacity-5' width={1200} height={800} alt='contactus' /> */}
        <div className="lg:max-w-7xl m-auto lg:mt-16 mt-10">
          <div className="lg:flex gap-24 justify-center items-center">
            <p className="text-black text-[16px]  leading-7 tracking-wider lg:w-[40%] lg:px-0 px-4">
              Welcome to our Contact Us page, where your queries find a swift
              resolution! At Anjalicomputereducation, we take pride in our
              dedicated customer care service, committed to providing you with
              comprehensive information and assistance. Our efficient team
              ensures that your inquiries are addressed promptly, guaranteeing a
              response within 24 hours. Your satisfaction is our priority, and
              we strive to make your experience seamless. Feel free to reach
              out, and let us assist you in any way we can. Thank you for
              choosing Anjalicomputereducation.
            </p>
            <div className="lg:w-[30%] lg:px-0 px-4 lg:mt-0 mt-6" >
              <Form />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
