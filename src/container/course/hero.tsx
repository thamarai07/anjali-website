import React from 'react';
import { CourseContentTypeing } from '@/types'
import Image from 'next/image';
export default function CourseHero({CourseContent}: CourseContentTypeing) {
  return (
    <>
        <div className='md:flex gap-10  items-center shadow-md'>
            <Image src={CourseContent.image} alt={CourseContent.courseTitle} height={300} width={600} />
            <div className='text-center lg:px-0 px-4 lg:py-0 py-8'>
            <h1 className=' lg:text-4xl text-3xl font-extrabold text-green-500 mb-4 lg:mt-0 mt-10'>{CourseContent.courseTitle}</h1>
            <h2 className='text-xl font-semibold pt-10'>{CourseContent.Slogan}</h2>
            </div>
        </div>
    </>
  );
}
