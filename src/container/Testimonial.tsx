import type { FC } from 'react';
import { CiStar } from "react-icons/ci";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
interface TestimonialProps {}

const Testimonial: FC<TestimonialProps> = ({}) => {
    const TestiMonialArr = [
        {
            id : 1,
            content : "I have taken ATGD course in this institution, before I did not have designing skills, now I gained very much knowledge in designing and editing. This is very useful for my digital business also. Thank you Anjali Computer Education , thank you for my Multimedia teacher, infrastructure is also so good.",
            studentName : "Anusuya"
        },
        {
            id : 2,
            content : "I am  student of Anjali computer Education, Teaching wise good .staffs are very well teaching .This is the perfect place were as to develop computer knowledge skills. Previously i dont any computer knowledge but now i am good enough to learn many newly developed versions.and also staffs are friendly and kind to us.infrastructure is neat and clean. Communication class and placement traning class very useful for me",
            studentName : "Meena"
        },
        {
            id : 3,
            content : "Quality courses, AC classrooms, Clean washrooms, Expert faculty, Subject matter expertise, Professional faculty, Sanitised classrooms I am a student from bharath University, chennai. I recently completed my Software programming course and flourished a good score. Teaching Staff are the course expertise and guides students from the beginning. The faculty is so much friendly and supportive and solve doubts personally . Thanks for guiding me.",
            studentName : "Rahul"
        }
    ]
        return (
            <>  
                <div className='mt-20 mb-10 '>
                    <h4 className='text-center md:text-[45px] text-[30px] font-semibold  lg:mt-[120px] mb-[60px] antialiased'> Testimonials </h4>
                    <div className='md:flex gap-4 mt-10 p-4 font-semibold'>
                        {
                            TestiMonialArr.map((values)=>(
                                <>
                                <div className='border border-green-600 p-4 lg:mb-0 mb-4'>
                                <div className=''>
                                <h6 className='text-[24px] flex items-center gap-2 font-semibold'>{values.studentName} {values.id <= 2  ? <FcBusinesswoman/> : <FcBusinessman/> } </h6>
                                </div>
                                <div className='flex'>
                                <CiStar className='text-[#FFD700] border-[#FFD700] ' size={30}/>
                                <CiStar className='text-[#FFD700] border-[#FFD700] ' size={30}/>
                                <CiStar className='text-[#FFD700] border-[#FFD700] ' size={30}/>
                                <CiStar className='text-[#FFD700] border-[#FFD700] ' size={30}/>
                                <CiStar className='text-[#FFD700] border-[#FFD700] ' size={30}/>
                                </div>
                                <p className='mt-4 text-[14px]'>{values.content}</p>
                                </div>
                                </>
                            ))
                        }    
                    </div>   
                </div>
            </>
        );
}
export default Testimonial;