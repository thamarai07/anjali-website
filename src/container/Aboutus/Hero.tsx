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
                        <h1 className='text-xl'>Anjali Computer Education</h1>
                        <h2 className='lg:text-4xl text-2xl font-semibold mt-8'>About us</h2>
                    </div>
                </div>
            </>
        );
}
export default Hero;