import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className='m-auto  lg:mt-10 mt-6'>
    <div className='shadow-md md:w-[100%]  bg-[#002b17] md:flex lg:px-24 px-4 lg:py-6 py-8 gap-24'>
        <div>
            <Image src={"/anjalilogo.png"} width={160} height={120} alt='anjalicomputereducation-logo'/>
        </div>
        <div>
          
          <ul className=' text-white font-medium'>
            <li><Link href="/">Home</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/aboutus/">About Us</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/contactus/">Contact Us</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/gallery/">Gallery</Link></li>
          </ul>
        </div>
        <div className=''>
          <ul className=' text-white font-medium'>
            <li><Link className='mt-1 p-1 hover:bg-white hover:text-black rounded' href="/course/c_programming/">C</Link></li>
            <li><Link className='mt-1 p-1 hover:bg-white hover:text-black rounded' href="/course/cpp_oop/">C++</Link></li>

            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/java_programming/">Java</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/python_with_django/">Python</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/angularjs_web_dev/">AngularJs</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/dot_net_technology/">.Net</Link></li>
          
          </ul>
        </div>
        <div>
          <ul className=' text-white font-medium'>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/tally_prime/">Tally Prime</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/tallyerp9/">Tally ERP9</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/taxation_gst_concepts/">Taxation &amp; GST Concepts</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/cloud_accounting/">Cloud Accounting </Link></li>
          </ul>
        </div>

       

        <div>
          <ul className=' text-white font-medium'>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/mswindows/">MS - Windows</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/msword/">MS - Word</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/msexcel/">MS - Excel</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/advancedexcel/">Advance Excel</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/mspowerpoint/">MS - Power Point</Link></li>

            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/msaccess/">MS - Access</Link></li>

          </ul>
        </div>
        
    </div>
            <div className='bg-white p-[1px]'> </div>
    <div className='shadow-md md:w-[100%]  bg-[#002b17] md:flex lg:px-24 px-4 lg:py-6 py-8 gap-24'>

    <div>
          <ul className=' text-white font-medium'>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/basic_digital_electronics/">Basic &amp; Digital Electronics</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/pc_architecture/">PC - Architecture</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/pc_assembling/">PC - Assembling</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/software_installation/">Software Installation</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/networking_essentials/"> NetWorking Essentials</Link></li>

            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/windows_server/">Windows Server</Link></li>

          </ul>
        </div>

        



        <div>
          <ul className=' text-white font-medium'>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href="/course/graphic_design_mastery/">Graphic Designer</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/adobe_indesign/">Adobe Indesign</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/adobe_photoshop/">Adobe Photoshop</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/adobe_illustrator/">Adobe Illustrator</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/web_designing/"> Web Designing</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/adobe_dreamweaver/">Adobe DreamWeaver</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/adobe_animate/">Adobe Animate</Link></li>
            <li className='mt-1 p-1 hover:bg-white hover:text-black rounded'><Link href=" /course/adobe_audition_vfx/">Adobe Audition/VFX</Link></li>



          </ul>
        </div>
    </div>
    <div className="bg-yellow-500 text-black  font-semibold  text-center py-5"><p className="false">© AnjaliComputerEducation 2024, All rights reserved</p></div></div>
  )
}

export default Footer
