import Image from 'next/image'
import React from 'react'

export default function Certificate() {
  return (
    <div className='mt-16 '>
        <h2 className='text-center md:text-[45px] text-[30px] font-semibold  lg:mt-[120px] mt-20 mb-[60px] antialiased
        '>Certified Excellence: Our ISO Accreditation</h2>
        <div className='mt-10 border rounded-lg lg:px-10 px-4 lg:py-6 py-4'>
        <div className='lg:flex gap-10 md:mt-0 mt-4'>
        <div className='lg:w-[25%] w-[100%] lg:block flex justify-center'>
        <Image src={"/ISO-certification-scaled.webp"} width={200} height={180} alt='iso certificate'/>
        </div>
        <ul className='md:mt-0 mt-4'>
            <li>
                <span className='lg:text-[22px] text-[18px] font-semibold text-green-500'>Internationally Recognized Standards:</span>
                <br />
                <span className='lg:text-base text-sm lg:pt-0 pt-4 '> Our commitment to quality is endorsed by ISO certification, a globally recognized standard for excellence.</span>
            </li>
            <li className='mt-4'> 
                <span className='text-[22px] font-semibold text-green-500'>Stringent Quality Control:</span>
                <br />
                <span>Rigorous quality management systems ensure that our products/services consistently meet customer expectations and regulatory requirements.</span>
            </li>
        </ul>
        </div>
        </div>
    </div>
  )
}
