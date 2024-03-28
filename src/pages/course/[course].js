import Head from "next/head";
// import { CourseContent } from "@/utils/CourseContent";
import {CourseContent} from "../../../utils/CourseContent"
import MainLayout from "@/components/Layuout/MainLayout";
import CourseHero from "@/container/course/hero";
import IdealFor from "@/container/course/IdealFor";
import CourseForm from "@/container/course/CourseForm";
import ScopeofCourse from "@/container/course/ScopeofCourse";
import JobRole from "@/container/JobRole";



import AnjaliStats from "@/container/AnjaliStats";
import Testimonial from "@/container/Testimonial";


import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = CourseContent.map((post,index) => ({
    params: { course: post.slug , key :index},
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const course = CourseContent.find((values) => values.slug === params.course);

  return { props: { course } };
}

const Course = ({ course }) => {


  const Router = useRouter()
  return (
    <>
      <Head>
        <title>{course.courseTitle + " Course in Anjalicomputereducation "} | ISO Certified</title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content={course.Slogan}
        />
        <meta
          name="keywords"
          content={course.courseTitle + "course , tob softskill course , self development course, best course during school day's, best course during collage, it courses in chennai, accounting courses in chennai, media related courses in chennai "  }
        />
            <link rel="canonical" href={`https://anjalicomputereducation.com`+Router.asPath} />

      </Head>
      <MainLayout>
        <div className="lg:max-w-[1200px] m-auto lg:px-10 ">
          <CourseHero CourseContent={course} />
          <IdealFor CourseContent={course} />
          <CourseForm CourseContent={course} />
          <ScopeofCourse CourseContent={course} />
          <JobRole CourseContent={course} />
          <div className="mt-20 mb-20">
            <AnjaliStats />
          </div>
          <Testimonial />
        </div>
      </MainLayout>
    </>
  );
};

export default Course;
