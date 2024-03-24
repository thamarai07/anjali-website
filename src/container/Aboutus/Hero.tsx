import type { FC } from 'react';
import Image from 'next/image';
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
        return (
            <>
                <div className='lg:flex'>
                    <div>
                    <Image src={"/assets/anjali/aboutus/banner.avif"} width={540} height={400} alt='aboutus banner'/> 
                    </div>
                    <div className='lg:m-auto text-center  mt-6'>
                        <p className='text-xl'>Anjali Computer Education</p>
                        <h4 className='lg:text-4xl text-2xl font-semibold'>About us</h4>
                    </div>
                </div>
            </>
        );
}
export default Hero;