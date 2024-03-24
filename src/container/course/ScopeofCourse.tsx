import React from "react";
import { CourseContentTypeing } from "@/types";
import { VscDebugBreakpointData } from "react-icons/vsc";


function ScopeofCourse({ CourseContent }: CourseContentTypeing) {
  return (
    <div className="lg:px-0 px-4">
      <p className="text-3xl font-semibold lg:mt-20 mt-10 ">Scope:</p>

      <p className="font-medium lg:text-[16px] leading-7  mt-8">
        {CourseContent.ScopeofCourseContent}
      </p>
      <div className="lg:flex gap-10 items-center">
        <div className="grid lg:grid-cols-2  border px-6 py-4 lg:mt-14 mt-5 shadow-xl mb-10 rounded-lg lg:w-[100%]">
          {CourseContent.ScopeofCourse.map((values) => (
            <div
              key={values.id}
              className="p-2 text-[16px] font-medium flex items-center gap-4 lg:bg-white hover:bg-green-100 rounded"
            >
              <VscDebugBreakpointData className="text-gray-500 lg:block hidden" />
              {values.scope}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScopeofCourse;
