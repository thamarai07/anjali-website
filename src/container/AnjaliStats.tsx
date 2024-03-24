import type { FC } from "react";

import { LuBookCopy } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { CiTrophy } from "react-icons/ci";

interface AnjaliStatsProps {}

const AnjaliStats: FC<AnjaliStatsProps> = ({}) => {
  const GlobalValues = {
    starting: 155,
    speed: 30,
  };
  const StudentCountValues = {
    starting: 10001,
    speed: 0.1,
  };
  const QualifiedTeacherValues = {
    starting: 36,
    speed: 30,
  };
  const AwardsValues = {
    starting: 276,
    speed: 30,
  };

  return (
    <>
      <div className="flex flex-wrap gap-10">
        <div className="m-auto bg-yellow-50 p-5 w-[220px] rounded-[20px]" >
          <p className="text-[16px] font-semibold text-center"><span className="text-[#005073] text-[20px]">155</span> Courses</p> 
          <LuBookCopy className="text-[#006400] m-auto mt-2" size={60}/>
        </div>
        <div className="m-auto bg-yellow-50 p-5 w-[260px] rounded-[20px]">
          <p className="text-[16px] font-semibold text-center"><span className="text-[#005073] text-[20px]"> 5000+ </span> Student's Enrolled</p> 
          <FaUserGraduate className="text-[#006400] m-auto mt-2" size={60}/>
        </div>
        <div className="m-auto bg-yellow-50 p-5 w-[220px] rounded-[20px]">
          <p className="text-[16px] font-semibold text-center"><span className="text-[#005073] text-[20px]"> 36 </span>Qualified Teacher's</p> 
          <GiGraduateCap className="text-[#006400] m-auto mt-2" size={60}/>
        </div>
        <div className="m-auto bg-yellow-50 p-5 w-[220px] rounded-[20px]">
          <p className="text-[16px] font-semibold text-center"><span className="text-[#005073] text-[20px]">26</span> Award's</p> 
          <CiTrophy className="text-[#006400] m-auto mt-2" size={60}/>
        </div>
      </div>
    </>
  );
};
export default AnjaliStats;
