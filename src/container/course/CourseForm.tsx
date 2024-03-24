import React from 'react'
import { CourseContentTypeing } from '@/types'
// import Form from './Form'
import Form from './Form'
import InnerCoursesTrend from '../InnerCourseTrandingS'

function CourseForm({CourseContent}: CourseContentTypeing) {
  return (
    <>
    <div className='mt-10 lg:px-0 px-4'>
    <div className='text-3xl font-semibold'>Course Overview</div>
    <div className='lg:flex mt-4 gap-24' >
        <div className='lg:w-[60%]'>
            <p className='font-medium text-[18px]'>
        {
            CourseContent.Introduction
        }</p>
          <InnerCoursesTrend/>
        
        </div>
        <div className='lg:w-[40%] lg:mt-0 mt-8'>
            <Form CourseContent={CourseContent}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default CourseForm
