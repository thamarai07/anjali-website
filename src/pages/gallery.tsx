import MainLayout from '@/components/Layuout/MainLayout'
import Head from 'next/head'
import React, { useState } from 'react'
import {Galleryimg,Galleryimg2} from "../../utils/gallery"
import 'photoswipe/dist/photoswipe.css'
import Image from 'next/image'
import FsLightbox from 'fslightbox-react'
export default function Courses() {
 

  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number : any) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

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
  <h1 className='lg:text-[30px] text-[24px] font-bold text-center p-6 text-green-500 leading-10'>Explore the Vibrance of Our Past Events: A Captivating Gallery Showcase</h1>
  <h3 className='lg:text-4xl text-xl text-center mt-5 font-semibold text-blue-500'>Free...Career Guidance WorkShop (17th Dec - 2023)</h3>
  <h2 className='text-2xl font-bold text-center mb-10 mt-10'>Chengalpattu Branch <span>- 93+ students</span></h2>
  <button className='m-auto block bg-blue-600 text-white px-4 py-4 rounded font-semibold' onClick={() => openLightboxOnSlide(1)}>
				View More...
			</button>
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={
          Galleryimg2
				}
				slide={lightboxController.slide}
			/>
      <div className='lg:grid lg:grid-cols-3'>
    {
      Galleryimg.map((valuse)=>(
        <div className=' p-10 block m-auto'>
        <Image src={valuse.src} width={300} height={200} alt={valuse.caption}/>
        </div>
      ))
    }
    </div>

  </MainLayout>
</>
  )
}
