import { CourseContentTypeing } from '@/types'


const JobRole = ({CourseContent}: CourseContentTypeing) =>{
    return(
        <>
           <div className=' mt-10 lg:px-0 px-4'>
        <h3 className='lg:text-3xl text-xl text-center lg:mb-0 mb-2 font-bold text-green-400'>Job's for {CourseContent.courseTitle} </h3>
        <div className='flex flex-wrap lg:mt-8 justify-center items-center'>
        {CourseContent.CareerProspectsJobRolesContent}
        </div>
        <div className=' lg:mt-10 mt-0'>
            <ul className='grid lg:grid-cols-3 grid-cols-2 lg:text-left text-center  '>
                {CourseContent.CareerProspectsJobRoles.map((values)=>(
                <li className='mt-2 mb-2 font-semibold lg:text-[16px] text-[14px] '>{values.jobrole}</li>
                ))}
            </ul>
        </div>
    </div>
        </>
    )
}
export default JobRole